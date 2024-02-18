import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './features/auth/store/reducers';
import { provideEffects } from '@ngrx/effects';
import { RegisterEffect } from './features/auth/store/effects/register.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ auth: authReducer }),
    provideStoreDevtools({ maxAge: 20, logOnly: !isDevMode() }),
    provideEffects(),
  ],
};
