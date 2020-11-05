import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITemplate } from "src/Models/Interfaces/ITemplate";

@Injectable({
  providedIn: "root",
})
export class TemplateService {
  private _baseUrl: string;

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this._baseUrl = baseUrl + "api/templates/";
  }

  public getAll() {
    return this.http.get(this._baseUrl);
  }

  public getSingle(id: number) {
    return this.http.get(this._baseUrl + id);
  }

  public post(template: ITemplate) {
    return this.http.post(this._baseUrl, template);
  }

  public put(id: number, template: ITemplate) {
    return this.http.put(this._baseUrl + id, template);
  }

  public delete(id: number) {
    return this.http.delete(this._baseUrl + id);
  }
}
