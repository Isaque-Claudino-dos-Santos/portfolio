import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrganizationPage = repositoryName?.endsWith(".github.io");

const nextConfig: NextConfig = {
  output: "export",
  ...(process.env.GITHUB_ACTIONS === "true" &&
  repositoryName &&
  !isUserOrOrganizationPage
    ? { basePath: `/${repositoryName}` }
    : {}),
};

export default nextConfig;
