import { enableProdMode, NgZone } from '@angular/core';
import { singleSpaAngular } from 'single-spa-angular';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: async () => {
    return bootstrapApplication(AppComponent, appConfig);
  },
  template: '<app-root></app-root>',
  NgZone: NgZone,
});

export const { bootstrap, mount, unmount } = lifecycles;
export { AppComponent as ProfileComponent } from './app/app.component'; // Expose ProfileComponent