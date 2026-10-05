/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: "#0e1116", ink: "#f2efe8", muted: "#8b93a1", road: "#1a1f27", accent: "#ff5a36" },
      fontFamily: { sans: ["var(--font-grotesk)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
