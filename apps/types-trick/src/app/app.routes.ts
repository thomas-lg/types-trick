import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'typeguards',
    pathMatch: 'full',
  },
  {
    path: 'typeguards',
    loadComponent: () =>
      import('./pages/typeguards/typeguards.component').then(
        (m) => m.TypeguardsComponent,
      ),
  },
  {
    path: 'typescript-utils',
    loadComponent: () =>
      import('./pages/typescript-utils/typescript-utils.component').then(
        (m) => m.TypescriptUtilsComponent,
      ),
  },
  {
    path: 'typeguards-func',
    loadComponent: () =>
      import('./pages/typeguards-func/typeguards-func.component').then(
        (m) => m.TypeguardsFuncComponent,
      ),
  },
  {
    path: 'di',
    loadComponent: () =>
      import('./pages/di/di.component').then((m) => m.DiComponent),
  },
];
