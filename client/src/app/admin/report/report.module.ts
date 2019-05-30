import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRouting } from "./report-routing";
import { ReportComponent } from "./report.component";
import { ReportService } from "./report.service";


@NgModule({
    declarations: [ReportComponent],
    imports: [CommonModule, ReportRouting],
    exports: [],
    providers: [ReportService],
})
export class ReportModule { }