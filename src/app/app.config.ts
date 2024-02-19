import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './features/auth/store/reducers';
import { provideEffects } from '@ngrx/effects';
import { RegisterEffect } from './features/auth/store/effects/register.effect';
import { provideHttpClient } from '@angular/common/http';
import { LoginEffect } from './features/auth/store/effects/login.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ auth: authReducer }),
    provideStoreDevtools({ maxAge: 20, logOnly: !isDevMode() }),
    provideEffects(RegisterEffect,LoginEffect),
  ],
};
