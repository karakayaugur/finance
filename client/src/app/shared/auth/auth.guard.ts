
import { Injectable } from '@angular/core';
import {
    CanActivate,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
    Router,
    Route,
    NavigationExtras,
    CanLoad
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root',
})

export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}