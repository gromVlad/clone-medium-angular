import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './features/auth/store/reducers';
import { provideEffects } from '@ngrx/effects';
import { RegisterEffect } from './features/auth/store/effects/register.effect';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoginEffect } from './features/auth/store/effects/login.effect';
import { GetCurrentUserEffect } from './features/auth/store/effects/getCurrentUser.effect';
import { AuthInterceptor } from './core/interceptors/authinterceptor';
import { feedReducer } from './features/feed/store/reducers';
import { GetFeedEffect } from './features/feed/store/effects/getFeed.effect';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      auth: authReducer,
      feed: feedReducer,
      router: routerReducer,
    }),
    provideStoreDevtools({ maxAge: 20, logOnly: !isDevMode() }),
    provideEffects(
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      GetFeedEffect
    ),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideRouterStore(),
  ],
};