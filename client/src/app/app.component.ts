import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor (private router:Router){
    router.events.subscribe((event:Event)=>{
      if(event instanceof NavigationStart){

      }
    })
  }
}
