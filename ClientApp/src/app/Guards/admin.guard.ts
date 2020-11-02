import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { StorageKey } from "../../Models/StorageKey";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private jwtHelper: JwtHelperService) {}

  canActivate() {
    const token = localStorage.getItem(StorageKey.Token);

    // return true;
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      var decodedToken = this.jwtHelper.decodeToken(
        localStorage.getItem(StorageKey.Token)
      );

      var roles: string[] =
        decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];

      if (roles != null && roles.includes("Admin")) return true;
    }

    this.router.navigate(["login"]);
    return false;
  }
}
