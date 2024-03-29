// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  content: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
    "./pages/**/*.mdx",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // ...
};
