import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'time-voyage',
    pathMatch: 'full',
  },
  {
    path: 'time-voyage',
    loadComponent: () =>
      import('./components/templates/time-voyage/time-voyage.component').then(
        (c) => c.TimeVoyageComponent
      ),
  },
  {
    path: 'to-do',
    loadComponent: () =>
      import('./components/templates/to-do/to-do.component').then(
        (c) => c.ToDoComponent
      ),
  },
];
