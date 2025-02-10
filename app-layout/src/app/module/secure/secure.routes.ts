import { Routes } from '@angular/router';
import { SecureComponent } from './secure.component';
import { AuthGuard } from '../../common/services/auth.guard';

export const secureRoutes: Routes = [
  {
    path: "",
    redirectTo: "profile",
    pathMatch: "full",
  },
  {
    path: "profile",
    canActivate: [AuthGuard],
    loadComponent: () =>
      import("profile/ProfileComponent").then((m) => m.ProfileComponent), // ✅ Ensure this matches Webpack `exposes`
  },
  {
    path: "settings",
    canActivate: [AuthGuard],
    loadComponent: () =>
      import("settings/SettingsComponent").then((m) => m.SettingsComponent), // ✅ Ensure this matches Webpack `exposes`
  },
  { path: "**", redirectTo: "profile" },
];
