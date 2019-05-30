import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class SidebarService {

    private SidebarState = new Subject<State>();

    sidebarState$ = this.SidebarState.asObservable();

    public sidebarToggle(event, value) {
        this.SidebarState.next({
            event: event,
            value: value
        })
    }
}

export class State {
    event: string;
    value: any
}


/*For Side Bar state*/