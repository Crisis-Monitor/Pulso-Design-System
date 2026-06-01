import nextra from "nextra";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/Pulso-Design-System";

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: { codeblocks: false },
});

export default withNextra({
  output: "export",
  basePath: isGitHubPages ? githubPagesBasePath : undefined,
  assetPrefix: isGitHubPages ? `${githubPagesBasePath}/` : undefined,
  trailingSlash: isGitHubPages,
  images: { unoptimized: true },
});
