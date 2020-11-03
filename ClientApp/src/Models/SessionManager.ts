import { IAuthService } from "./Interfaces/IAuthService";
import { ILoginCreditentials } from "./Interfaces/ILoginCreditentials";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { tokenGetter } from "../app/app.module";
import { StorageKey } from "./StorageKey";

export class SessionManager {
  private readonly _authService: IAuthService;

  constructor(
    authService: IAuthService,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {
    this._authService = authService;
  }

  public LogIn(creditentials: ILoginCreditentials): boolean {
    let result;
    this._authService.login(creditentials).subscribe(
      (response) => {
        const token = (<any>response).token;
        localStorage.setItem(StorageKey.Token, token);
        result = true;
        this.router.navigate(["/"]);
      },
      (err) => {
        console.log(err);
        result = false;
      }
    );

    return result;
  }

  public LogOut() {
    localStorage.removeItem(StorageKey.Token);
    this.router.navigate(["/"]);
  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem(StorageKey.Token);
    return token != null && !this.jwtHelper.isTokenExpired(token)
      ? true
      : false;
  }

  hasRole(role: string) {
    let roles: string[] = [];

    const decodedToken = this.jwtHelper.decodeToken(
      localStorage.getItem(StorageKey.Token)
    );

    if (decodedToken) {
      let decodedRoles =
        decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];

      if (decodedRoles) roles = decodedRoles;
    }

    return roles.includes(role);
  }
}
