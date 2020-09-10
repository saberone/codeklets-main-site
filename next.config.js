const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const path = require("path");

const withOptimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    withOptimizedImages,
    {
      /* config for next-optimized-images */
      images: {
        // for example
        handleImages: ["jpeg", "png", "webp", "gif", "ico"],
      },
    },
  ],
  [withReactSvg, { include: path.resolve(__dirname, "assets/svg") }]
);
