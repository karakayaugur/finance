import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionService } from "./transaction.service";
import { fade } from "../../shared/animation/animations";
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Table } from '../../shared/models/table';
import { ShowModalComponent } from "./show/show-modal.component";
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as moment from 'moment';


@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    animations: [fade]
})
export class TransactionComponent implements OnInit, OnDestroy {
    _form: FormGroup;

    constructor(private _transactionService: TransactionService,
        public bsModalService: BsModalService, ) {
    }

    query = {
        "fromDate": "",
        "toDate": "",
        "status": ""
    };
    table = new Table();

    ngOnInit(): void {
        this._form = new FormGroup({
            "fromDate": new FormControl(new Date(2018,0,1), [Validators.required]),
            "toDate": new FormControl(new Date, [Validators.required]),
            "status": new FormControl("")
        });
        this.loadTable();
    }

    loadTable() {        
        if (this._form.valid) {            
            this.query.fromDate = moment(this._form.value.fromDate).format('YYYY-MM-DD');   
            this.query.toDate = moment(this._form.value.toDate).format('YYYY-MM-DD');            
            this._transactionService.getTransaction(this.query).pipe(untilDestroyed(this))
                .subscribe(response => this.table.data = response);
        }
    }

    showModal(item) {
        const modal = this.bsModalService.show(ShowModalComponent, {
            class: 'modal-md', initialState: {
                initialParams: {
                    fullName: item.customerInfo.billingFirstName + ' ' + item.customerInfo.billingLastName || null,
                    email: item.customerInfo.email || null,
                    number: item.customerInfo.number || null,
                    type: item.acquirer.type || null
                }
            }
        });
        modal.content.bsModalService.onHide.pipe(untilDestroyed(this)).subscribe(result => {
            console.log('modal closed');
        });
    }

    ngOnDestroy() { }
}
