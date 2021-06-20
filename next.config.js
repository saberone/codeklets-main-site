/*const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withPlugins([
  withReactSvg,
  {
    include: path.resolve(__dirname, "assets/svg"),
    webpack(config, options) {
      return config;
    },
  },
]);
*/
/* module.exports = withReactSvg({
  future: {},
  include: path.resolve(__dirname, "assets/svg"),
  webpack(config, options) {
    return config;
  },
});*/

module.exports = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });
    return config;
  },
};
