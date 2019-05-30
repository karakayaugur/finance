import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './admin/admin.module#AdminModule'
  }, {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes);