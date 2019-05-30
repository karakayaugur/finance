import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _dataUri = environment.apiUrl;
    private _currentUser = {};
    private _isLoggedin = false;

    constructor(private _http: HttpClient, private router: Router) { }

    getToken() {
        return localStorage.getItem('token') || undefined;
    }

    signin(credentional: { username: "string", password: 'string' }) {
        localStorage.removeItem('token');
        this._http.post<any>(`${this._dataUri}/api/user/login`, credentional).subscribe(resp => {
            if (resp.status == "APPROVED") {
                this._isLoggedin = true;
                localStorage.setItem("token", resp.token);
                this.router.navigate(['/']);
            }
        });
    }

    isLoggedIn() {
        if (localStorage.getItem('token')) {
            this._isLoggedin = true;
        }
        return this._isLoggedin;
    }

    logout(): void {
        this._isLoggedin = false;
        localStorage.removeItem('token');
    }

}
