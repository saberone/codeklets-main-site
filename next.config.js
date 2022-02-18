const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const path = require("path");

const isDev = process.env.NODE_ENV !== "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Support MDX files as pages:
  pageExtensions: ["mdx", "tsx", "ts", "jsx", "js"],

  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [{ loader: "xdm/webpack.cjs", options: {} }],
    });

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
  ],
  nextConfig
);
