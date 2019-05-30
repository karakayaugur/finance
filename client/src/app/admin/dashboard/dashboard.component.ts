import { Component, OnInit } from '@angular/core';
import { fade } from "../../shared/animation/animations";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [fade]
})
export class DashboardComponent implements OnInit {

    constructor() { }
    ngOnInit(): void {
    }

}
