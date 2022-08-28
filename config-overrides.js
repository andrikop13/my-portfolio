const rewireAliases = require("react-app-rewire-aliases");
const path = require("path");

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    "@components": path.resolve(__dirname, "./src/components/"),
    "@hooks": path.resolve(__dirname, "./src/hooks/"),
    "@store": path.resolve(__dirname, "./src/store/"),
    "@utils": path.resolve(__dirname, "./src/utils/"),
    "@config": path.resolve(__dirname, "./src/config/"),
    "@assets": path.resolve(__dirname, "./src/assets/"),
  })(config, env);

  return config;
};
