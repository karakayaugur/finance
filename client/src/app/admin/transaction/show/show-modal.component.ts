import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-show-modal',
  templateUrl: './show-modal.component.html',
})
export class ShowModalComponent implements OnInit, OnDestroy {

  _form: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    public bsModalService: BsModalService,
  ) { }

  formParams = {
    fullName: '',
    email: '',
    number: '',
    type: ''
  };
  initialParams = {};

  ngOnInit() {
    Object.assign(this.formParams, this.initialParams);
    this._form = new FormGroup({
      "fullName": new FormControl(null),
      "email": new FormControl(null),
      "number": new FormControl(null),
      "type": new FormControl(null)
    });
    this._form.setValue(this.formParams);
  }

  onSubmit() {
  }

  ngOnDestroy() { }
}
