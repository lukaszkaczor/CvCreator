import { Component, OnInit } from "@angular/core";

import { Data, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  message: string;
  constructor(private router: Router, private jwtHelper: JwtHelperService) {}

  ngOnInit(): void {}

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
