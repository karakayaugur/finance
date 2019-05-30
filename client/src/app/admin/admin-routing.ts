
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "../shared/auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate:[AuthGuard],
    children: [
      { path: '', redirectTo: 'reports', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
      { path: 'reports', loadChildren: './report/report.module#ReportModule'},
      { path: 'transactions', loadChildren: './transaction/transaction.module#TransactionModule'}
    ]
  }
];

export const AdminRouting = RouterModule.forChild(routes);