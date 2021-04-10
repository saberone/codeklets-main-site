/*const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const path = require("path");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig = {
  future: {
    webpack5: true,
  },
  webpack(config, options) {
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withReactSvg,
      {
        include: path.resolve(__dirname, "assets/svg"),
      },
    ],
    [
      withMDX,
      {
        pageExtensions: ["js", "jsx", "mdx"],
      },
    ],
  ],
  nextConfig
);

/* module.exports = withReactSvg({
    
  include: path.resolve(__dirname, "assets/svg"),
  
}); */
