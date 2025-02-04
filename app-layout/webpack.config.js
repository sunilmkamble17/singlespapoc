const { ModuleFederationPlugin } = require("webpack").container;
const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  output: {
    uniqueName: "layout",
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "layout",
      filename: "main.js",
      exposes: {
        "./PublicModule": "./src/app/module/public/public.module.ts", // Expose public module
        "./SecureModule": "./src/app/module/secure/secure.module.ts", // Expose secure module
      },
      shared: shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
    }),
  ],
};
