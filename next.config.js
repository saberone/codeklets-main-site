const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const path = require("path");

/* module.exports = withPlugins([
  withReactSvg,
  {
    include: path.resolve(__dirname, 'assets/svg')
  },
]);*/

module.exports = withReactSvg({
  future: {
    webpack5: true,
  },  
  include: path.resolve(__dirname, "assets/svg"),
  webpack(config, options) {
    return config;
  },
});
