import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'charts',
        loadComponent: () => import('./pages/charts/charts.component'),
      },
      {
        path: 'speed-dial',
        loadComponent: () => import('./pages/speed-dial/speed-dial.component'),
      },
      {
        path: 'calendar',
        loadComponent: () => import('./pages/calendar/calendar.component'),
      },
      { path: '', pathMatch: 'full', redirectTo: 'charts' },
      { path: '**', pathMatch: 'full', redirectTo: 'charts' },
];
