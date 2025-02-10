const { ModuleFederationPlugin } = require("webpack").container;
const { shareAll } = require("@angular-architects/module-federation/webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.single-spa.ts",
  output: {
    uniqueName: "settings",
    publicPath: "http://localhost:4203/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "settings",
      filename: "remoteEntry.js",
      exposes: {
        "./SettingsComponent": "./src/app/app.component.ts",
      },
      shared: shareAll({ singleton: true, strictVersion: false, requiredVersion: "auto" }),
    }),
  ],
};
