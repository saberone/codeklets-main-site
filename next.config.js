const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  withOptimizedImages,
  {
    /* config for next-optimized-images */
    images: {
      // for example
      handleImages: ["jpeg", "png", "svg", "webp", "gif", "ico"],
    },
  },
]);
