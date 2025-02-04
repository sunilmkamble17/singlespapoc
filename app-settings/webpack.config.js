const { ModuleFederationPlugin } = require("webpack").container;
const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  output: {
    uniqueName: "settings",
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "settings",
      filename: "main.js",
      exposes: {
        "./SettingsModule": "./src/app/settings.module.ts", // Expose settings module
      },
      shared: shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
    }),
  ],
};
