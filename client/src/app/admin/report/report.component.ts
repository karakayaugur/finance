import { Component, OnInit } from '@angular/core';
import { ReportService } from "./report.service";
import { fade } from "../../shared/animation/animations";


@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
    animations: [fade]
})
export class ReportComponent implements OnInit {
    public transactions: [];
    constructor(private _reportService: ReportService) {
    }

    ngOnInit(): void {
        this.getReports();
    }
    getReports() {
        this._reportService.getReports().subscribe(response => {
            this.transactions=response.records;
        });
    }
}
