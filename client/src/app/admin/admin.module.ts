import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from "../shared/layouts/layout.module";
import { ComponentModule } from "../shared/components/component.module";

import { AdminRouting } from "./admin-routing";

import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { ReportService } from "./dashboard/report.service";



@NgModule({
    declarations: [AdminComponent, DashboardComponent],
    imports: [CommonModule, AdminRouting, LayoutModule, ComponentModule],
    exports: [],
    providers: [ReportService],
})

export class AdminModule { }