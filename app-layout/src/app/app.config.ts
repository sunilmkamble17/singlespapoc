import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withHashLocation(),
      // withComponentInputBinding(), // useful (with angular 19 - signal/input) to get data/params from url using input
      // withRouterConfig({ paramsInheritanceStrategy: 'always' }) // useful to get data/params from parent routes
    )
  ]
};
