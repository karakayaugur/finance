import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRouting } from "./transaction-routing";
import { TransactionComponent } from "./transaction.component";
import { TransactionService } from "./transaction.service";

import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ComponentModule } from "../../shared/components/component.module";
import { ShowModalComponent } from './show/show-modal.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        TransactionComponent,
        ShowModalComponent
    ],
    imports: [CommonModule, TransactionRouting, NgxPaginationModule, ComponentModule,ReactiveFormsModule,BsDatepickerModule.forRoot()],
    exports: [],
    providers: [TransactionService],
    entryComponents: [
        ShowModalComponent
    ]
})
export class TransactionModule { }