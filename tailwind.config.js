// tailwind.config.js
module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  // ...
};
