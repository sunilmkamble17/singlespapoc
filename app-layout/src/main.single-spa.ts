import { enableProdMode, NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { EmptyRouteComponent } from './app/empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
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

