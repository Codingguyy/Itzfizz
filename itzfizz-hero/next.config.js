// Static export so the site can be hosted on GitHub Pages.
// NEXT_PUBLIC_BASE_PATH is set to "/<repo-name>" by the GitHub Actions workflow.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  basePath,
  images: { unoptimized: true },
};
