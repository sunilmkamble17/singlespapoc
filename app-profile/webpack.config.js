const { ModuleFederationPlugin } = require("webpack").container;
const { shareAll } = require("@angular-architects/module-federation/webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.single-spa.ts",
  output: {
    uniqueName: "profile",
    publicPath: "http://localhost:4202/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "profile",
      filename: "remoteEntry.js",
      exposes: {
        "./ProfileComponent": "./src/app/app.component.ts",
      },
      shared: shareAll({ singleton: true, strictVersion: false, requiredVersion: "auto" }),
    }),
  ],
};
