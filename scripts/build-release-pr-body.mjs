import { execFileSync } from "node:child_process";

const { GITHUB_REPOSITORY } = process.env;

if (!GITHUB_REPOSITORY) {
  throw new Error(
    "GITHUB_REPOSITORY is not set — this script must run in GitHub Actions."
  );
}

const [owner, repo] = GITHUB_REPOSITORY.split("/");
const log = execFileSync("git", [
  "log",
  "--pretty=format:%H%x01%s%x01%an",
  "origin/production..origin/main",
]).toString();

const commits = log
  .split("\n")
  .filter(Boolean)
  .map((line) => {
    const [sha, subject, author] = line.split("\x01");
    return { author, sha, subject };
  });

const prLinkPattern = /\(#(\d+)\)\s*$/;

const lines = commits.map(({ sha, subject, author }) => {
  const match = subject.match(prLinkPattern);
  if (match) {
    const [, prNumber] = match;
    const title = subject.replace(prLinkPattern, "").trim();
    return `- ${title} ([#${prNumber}](https://github.com/${owner}/${repo}/pull/${prNumber})) — ${author}`;
  }
  const shortSha = sha.slice(0, 7);
  return `- ${subject} ([\`${shortSha}\`](https://github.com/${owner}/${repo}/commit/${sha})) — ${author}`;
});

const compareUrl = `https://github.com/${owner}/${repo}/compare/production...main`;
const commitCount = commits.length;
const commitNoun = commitCount === 1 ? "commit" : "commits";

const body = `Auto-generated release PR.

**${commitCount} ${commitNoun}** pending release ([full diff](${compareUrl})):

${lines.length > 0 ? lines.join("\n") : "_No commits yet._"}
`;

process.stdout.write(body);
