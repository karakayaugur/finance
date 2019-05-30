import { Component, OnInit } from '@angular/core';
import { SidebarService } from "../../services/sidebar.service";
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';



@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    _sidebar: Boolean;

    constructor(private _sidebarService: SidebarService, public breakpointObserver: BreakpointObserver) { }

    ngOnInit(): void {
        this._sidebarService.sidebarState$.subscribe(data => {
            if (data.event === 'toggle') {
                this._sidebar = data.value;
            }
        });
        this.checkScreenSize();
    }

    checkScreenSize() {
        this.breakpointObserver
            .observe(['(max-width: 768px)'])
            .subscribe((state: BreakpointState) => {
                this._sidebarService.sidebarToggle('toggle', state.matches);
            });
    }

    sidebarToggle() {
        this._sidebarService.sidebarToggle('toggle', !this._sidebar);
    }
}