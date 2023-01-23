const withPlugins = require("next-compose-plugins");

const path = require("path");

module.exports = {
  // Support MDX files as pages:
  pageExtensions: ["mdx", "tsx", "ts", "jsx", "js"],

  webpack(config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [{ loader: "xdm/webpack.cjs", options: {} }],
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
