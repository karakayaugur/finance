import { Component, OnInit } from '@angular/core';
import { SidebarService } from "../../services/sidebar.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private _sidebarService: SidebarService) { }

    _sidebar: Boolean;

    ngOnInit(): void {
        this._sidebarService.sidebarState$.subscribe(data => {
            if (data.event === 'toggle') {
                this._sidebar = data.value;
            }
        });
    }
    sidebarToggle() {
        this._sidebarService.sidebarToggle('toggle', !this._sidebar);
    }

}
