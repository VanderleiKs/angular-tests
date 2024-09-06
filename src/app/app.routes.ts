import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'user',
        loadComponent: () => import('../app/shared/input-user/input-user.component').then(user => user.InputUserComponent)
    }
];
