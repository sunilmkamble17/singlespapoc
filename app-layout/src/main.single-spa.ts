import { enableProdMode, NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { EmptyRouteComponent } from './app/empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return bootstrapApplication(AppComponent, {
      providers: [
        getSingleSpaExtraProviders(),
        provideRouter([{ path: '**', component: EmptyRouteComponent }]),
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    });
  },
  template: '<app-root />',
  NgZone,
});

export const { bootstrap, mount, unmount } = lifecycles;

