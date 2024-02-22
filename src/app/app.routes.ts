import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tags/:slug',
    loadComponent: () =>
      import('./features/tag-feed/tag-feed.component').then(
        (m) => m.TagFeedComponent
      ),
  },
  {
    path: 'feed',
    loadComponent: () =>
      import('./features/your-feed/your-feed.component').then(
        (m) => m.YourFeedComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./features/globalfeed/globalfeed.component').then(
        (m) => m.GlobalfeedComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (m) => m.loginComponent
      ),
  },
];
