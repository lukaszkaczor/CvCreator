import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ILoginCreditentials } from "../../Models/Interfaces/ILoginCreditentials";
import { IRegisterCreditentials } from "../../Models/Interfaces/IRegisterCreditentials";
import { IAuthService } from "../../Models/Interfaces/IAuthService";

@Injectable({
  providedIn: "root",
})
export class AuthService implements IAuthService {
  private _baseUrl: string;

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this._baseUrl = baseUrl + "api/account/";
  }

  login(creditentials: ILoginCreditentials) {
    return this.http.post(this._baseUrl + "login", creditentials);
  }

  register(creditentials: IRegisterCreditentials) {
    return this.http.post(this._baseUrl + "register", creditentials);
  }
}
