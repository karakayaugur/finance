import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';

const routes: Routes = [
    {
        path: '',
        component: TransactionComponent
    }
];

export const TransactionRouting = RouterModule.forChild(routes);