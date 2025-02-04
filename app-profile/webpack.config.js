const { ModuleFederationPlugin } = require("webpack").container;
const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  output: {
    uniqueName: "profile",
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "profile",
      filename: "main.js",
      exposes: {
        "./ProfileModule": "./src/app/profile.module.ts", // Expose profile module
      },
      shared: shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
    }),
  ],
};
