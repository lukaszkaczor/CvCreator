import { IUsersDocument } from "./../../Models/Interfaces/IUsersDocument";
import { UsersDocumentsService } from "./../Services/users-documents.service";
import { Component, OnInit } from "@angular/core";

import { Data, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  message: string;
  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService,
    private ud: UsersDocumentsService
  ) {}

  ngOnInit(): void {
    const item: IUsersDocument = {
      Name: "ne",
      Html: "html",
      Styles: "styles",
    };
    this.ud.post(item).subscribe((response) => {
      console.log(response);
    });
  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("token");

    return token != null && !this.jwtHelper.isTokenExpired(token)
      ? true
      : false;
  }

  logOut() {
    localStorage.removeItem("token");
  }
}
