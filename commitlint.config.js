export default {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",
  ignores: [(commit) => commit === "", (commit) => commit.startsWith("Merge branch")],
  defaultIgnores: true,
  helpUrl: "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
  rules: { "subject-case": [0] },
};
