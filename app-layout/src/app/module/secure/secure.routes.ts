import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const secureRoutes: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js', // URL to profile microfrontend
        remoteName: 'profile',
        exposedModule: './ProfileComponent',
      }).then((m) => m.ProfileComponent),
  },
  {
    path: 'settings',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4203/remoteEntry.js', // URL to settings microfrontend
        remoteName: 'settings',
        exposedModule: './SettingsComponent',
      }).then((m) => m.SettingsComponent),
  },
];