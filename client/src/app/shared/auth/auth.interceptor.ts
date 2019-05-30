import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from './auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private _authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authtoken = this._authService.getToken();
        if (authtoken != undefined) {
            req = req.clone({
                headers: req.headers.set("Authorization", `${authtoken}`)
            })
        }
        return next.handle(req);
    }
}