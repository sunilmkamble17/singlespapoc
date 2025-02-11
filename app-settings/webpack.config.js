const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'settings', // Unique name for the microfrontend
    publicPath: 'http://localhost:4203/', // Match the port of the microfrontend
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'settings', // Name of the microfrontend
      filename: 'remoteEntry.js', // Entry file for the microfrontend
      exposes: {
        // './SettingsComponent': './src/app/app.component.ts', // Expose the SettingsComponent
        // './SettingsComponent': './src/main.ts', // Expose the SettingsComponent
        './SettingsComponent': './src/main.single-spa.ts', // Expose the SettingsComponent
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