import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../shared/auth/auth.service";
import { fade } from "../shared/animation/animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fade]
})
export class LoginComponent implements OnInit {

  _form: FormGroup;
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._form = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(4)])
    });
  };

  onSubmit() {
    if (this._form.valid) {
      this._authService.signin(this._form.value);
    }
  };

  onSetUser() {
    this._form.patchValue({ email: "demo@bumin.com.tr", password: "cjaiU8CV" });
  }

}
