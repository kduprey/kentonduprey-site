import { appendFileSync, writeFileSync } from "node:fs";
import { GitHub, Manifest } from "release-please";

const { GITHUB_REPOSITORY, GITHUB_TOKEN, GITHUB_OUTPUT, GITHUB_REF_NAME } =
  process.env;

if (!GITHUB_REPOSITORY) {
  throw new Error(
    "GITHUB_REPOSITORY is not set — this script must run in GitHub Actions."
  );
}
if (!GITHUB_TOKEN) {
  throw new Error("GITHUB_TOKEN is not set.");
}
if (!GITHUB_OUTPUT) {
  throw new Error(
    "GITHUB_OUTPUT is not set — this script must run in a GitHub Actions step."
  );
}
if (!GITHUB_REF_NAME) {
  throw new Error(
    "GITHUB_REF_NAME is not set — this script must run on a branch push."
  );
}

const [owner, repo] = GITHUB_REPOSITORY.split("/");
const targetBranch = GITHUB_REF_NAME;

const github = await GitHub.create({
  defaultBranch: targetBranch,
  owner,
  repo,
  token: GITHUB_TOKEN,
});

const manifest = await Manifest.fromConfig(github, targetBranch, {
  releaseType: "simple",
});

const [releasePullRequest] = await manifest.buildPullRequests();

if (!releasePullRequest?.version) {
  appendFileSync(GITHUB_OUTPUT, "released=false\n");
  process.exit(0);
}

const version = releasePullRequest.version.toString();
const tag = `v${version}`;
const notesFile = "release-notes.md";

writeFileSync(notesFile, releasePullRequest.body.notes());
appendFileSync(
  GITHUB_OUTPUT,
  `released=true\nversion=${version}\ntag=${tag}\nnotes_file=${notesFile}\n`
);
