import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./card/card.component";
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, ModalModule.forRoot()],
    exports: [CardComponent, ModalModule],
    providers: [],
})
export class ComponentModule { }