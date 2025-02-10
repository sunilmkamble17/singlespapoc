const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  name: "layout",
  output: {
    publicPath: "http://localhost:4201/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "layout",
      remotes: {
        profile: "profile@http://localhost:4202/remoteEntry.js",
        settings: "settings@http://localhost:4203/remoteEntry.js",
      },
    }),
  ],
};
