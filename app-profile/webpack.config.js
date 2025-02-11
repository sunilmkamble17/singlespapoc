// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// module.exports = {
//   output: {
//     uniqueName: 'profile', // Unique name for the microfrontend
//     publicPath: 'http://localhost:4202/', // Match the port of the microfrontend
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'profile', // Name of the microfrontend
//       filename: 'remoteEntry.js', // Entry file for the microfrontend
//       exposes: {
//         './ProfileComponent': './src/app/app.component.ts', // Expose the ProfileComponent
//       },
//       shared: {
//         // Shared dependencies (e.g., Angular, RxJS)
//         '@angular/core': { singleton: true, eager: true },
//         '@angular/common': { singleton: true, eager: true },
//         '@angular/router': { singleton: true, eager: true },
//         'rxjs': { singleton: true, eager: true },
//       },
//     }),
//   ],
// };

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'profile',
    publicPath: 'http://localhost:4202/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'profile',
      filename: 'remoteEntry.js',
      exposes: {
        // './ProfileComponent': './src/app/app.component.ts', // Expose the bootstrap file
        // './ProfileComponent': './src/main.ts', // Expose the bootstrap file
        './ProfileComponent': './src/main.single-spa.ts', // Expose the bootstrap file
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true },
        'rxjs': { singleton: true, eager: true },
      },
    }),
  ],
};