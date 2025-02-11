const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  name: "layout",
  output: {
    publicPath: "http://localhost:4201/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "layout",
      filename: 'remoteEntry.js',
      exposes: {
        './LayoutComponent': './src/main.single-spa.ts', // Expose the bootstrap file
      },
      remotes: {
        profile: "profile@http://localhost:4202/remoteEntry.js",
        settings: "settings@http://localhost:4203/remoteEntry.js",
      },
    }),
  ],
};
