import { IUsersDocument } from "./../../Models/Interfaces/IUsersDocument";
import { ITemplate } from "./../../Models/Interfaces/ITemplate";
import { StorageKey } from "./../../Models/StorageKey";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class UsersDocumentsService {
  private _baseUrl: string;
  email: string;
  headers: Headers;
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this._baseUrl = baseUrl + "api/usersDocuments/";
  }

  public get() {
    return this.http.get(this._baseUrl);
  }

  public post(document: IUsersDocument) {
    return this.http.post(this._baseUrl, document);
  }

  public put(id: number, document: IUsersDocument) {
    return this.http.put(this._baseUrl + id, document);
  }

  public delete(id: number) {
    return this.http.delete(this._baseUrl + id);
  }
}
