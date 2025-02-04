import { Routes } from '@angular/router';
import { SecureComponent } from './secure.component';
import { AuthGuard } from '../../common/services/auth.guard';

export const secureRoutes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',    
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('@anddone/profile').then((m) => m.ProfileModule),
        canActivate: [AuthGuard], // Protect individual routes
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('@anddone/settings').then((m) => m.SettingsModule),
        canActivate: [AuthGuard], // Protect individual routes
      },
      { path: '**', redirectTo: 'profile' }, // Default to profile
    ],
  },
];
