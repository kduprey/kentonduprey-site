import { execFileSync } from "node:child_process";

const { GITHUB_REPOSITORY, GH_TOKEN } = process.env;

if (!GITHUB_REPOSITORY) {
  throw new Error(
    "GITHUB_REPOSITORY is not set — this script must run in GitHub Actions."
  );
}

const [owner, repo] = GITHUB_REPOSITORY.split("/");
const log = execFileSync("git", [
  "log",
  "--pretty=format:%H%x01%s",
  "origin/production..origin/main",
]).toString();

const commits = log
  .split("\n")
  .filter(Boolean)
  .map((line) => {
    const [sha, subject] = line.split("\u0001");
    return { sha, subject };
  });

const getGithubLogin = async (sha) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits/${sha}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${GH_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data.author?.login ?? null;
  } catch {
    return null;
  }
};

const prLinkPattern = /\(#(?<prNumber>\d+)\)\s*$/u;
const ticketPattern = /\[(?<ticketId>[A-Z]+-\d+)\]/gu;
const linearOrg = "haus-of-web";

const lines = await Promise.all(
  commits.map(async ({ sha, subject }) => {
    const login = await getGithubLogin(sha);
    const authorTag = login ? `@${login}` : "unknown";

    const tickets = [...subject.matchAll(ticketPattern)].map(
      (m) => m.groups.ticketId
    );
    const fixesSuffix =
      tickets.length > 0
        ? ` (Fixes ${tickets
            .map((id) => `[${id}](https://linear.app/${linearOrg}/issue/${id})`)
            .join(", ")})`
        : "";

    const match = subject.match(prLinkPattern);
    if (match) {
      const { prNumber } = match.groups;
      const title = subject
        .replace(prLinkPattern, "")
        .replaceAll(ticketPattern, "")
        .trim();
      return `- ${title} — #${prNumber}${fixesSuffix} — ${authorTag}`;
    }
    const shortSha = sha.slice(0, 7);
    const title = subject.replaceAll(ticketPattern, "").trim();
    return `- ${title} ([\`${shortSha}\`](https://github.com/${owner}/${repo}/commit/${sha}))${fixesSuffix} — ${authorTag}`;
  })
);

const compareUrl = `https://github.com/${owner}/${repo}/compare/production...main`;
const commitCount = commits.length;
const commitNoun = commitCount === 1 ? "commit" : "commits";

const body = `Auto-generated release PR.

**${commitCount} ${commitNoun}** pending release ([full diff](${compareUrl})):

${lines.length > 0 ? lines.join("\n") : "_No commits yet._"}
`;

process.stdout.write(body);
