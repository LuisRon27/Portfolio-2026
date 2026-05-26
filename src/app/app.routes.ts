import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/main-page/main-page').then(m => m.MainPage)
  },
  {
    path: 'proyecto/:slug',
    loadComponent: () => import('./pages/project-detail/project-detail').then(m => m.ProjectDetail)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
