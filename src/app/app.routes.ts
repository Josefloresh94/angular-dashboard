import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'content',
    loadComponent: () =>
      import('./pages/content/content').then((m) => m.Content),
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('./pages/analytics/analytics').then((m) => m.Analytics),
  },
  {
    path: 'comments',
    loadComponent: () =>
      import('./pages/comments/comments').then((m) => m.Comments),
  },
];
