import { registerApplication, start, LifeCycles } from 'single-spa';
import * as singleSpa from 'single-spa';

// Helper function to load Angular microfrontends
const loadAngularApp = (name: string) => {
  return async () => {
    const module: LifeCycles<{}> = await System.import(name);
    return module;
  };
};

// Register `@anddone/layout` (Main Layout Microfrontend)
// This will load public or secure modules based on route
registerApplication({
  name: '@anddone/layout',
  app: loadAngularApp('@anddone/layout'),
  activeWhen: (location) => location.hash.startsWith('')
});

// Register Profile Microfrontend
registerApplication({
  name: '@anddone/profile',
  app: loadAngularApp('@anddone/profile'),
  activeWhen: (location) => location.hash.startsWith('#/profile'),
});

// Register Settings Microfrontend
registerApplication({
  name: '@anddone/settings',
  app: loadAngularApp('@anddone/settings'),
  activeWhen: (location) => location.hash.startsWith('#/settings'),
});

// Start single-spa
start();

// const defaultRoute = '#/login'
// const activeApp = singleSpa.getAppStatus('@anddone/layout') === 'MOUNTED' || singleSpa.getAppStatus('@anddone/profile') === 'MOUNTED' || singleSpa.getAppStatus('@anddone/settings') === 'MOUNTED';
// if (!activeApp) {
//   singleSpa.navigateToUrl(defaultRoute);

// }





// import { registerApplication, start } from 'single-spa';

// // Register the layout microfrontend
// registerApplication({
//   name: '@anddone/layout',
//   app: () => System.import('@anddone/layout'),
//   activeWhen: ['/'],
// });

// // Register the profile microfrontend
// registerApplication({
//   name: '@anddone/profile',
//   app: () => System.import('@anddone/profile'),
//   activeWhen: ['/profile'],
// });

// // Register the settings microfrontend
// registerApplication({
//   name: '@anddone/settings',
//   app: () => System.import('@anddone/settings'),
//   activeWhen: ['/settings'],
// });

// start();