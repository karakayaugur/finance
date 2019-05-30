import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarService  } from "../services/sidebar.service";

import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        SidebarService
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent
    ]
})
export class LayoutModule { }
