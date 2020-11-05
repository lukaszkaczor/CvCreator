import { AuthService } from "./../../Services/auth.service";
import { SessionManager } from "./../../../Models/SessionManager";
import { Component, OnInit } from "@angular/core";
import { StorageHelper } from "../../../Models/StorageHelper";
import { StorageKey } from "../../../Models/StorageKey";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { IAuthService } from "src/Models/Interfaces/IAuthService";

@Component({
  selector: "admin-menu",
  templateUrl: "./admin-menu.component.html",
  styleUrls: ["./admin-menu.component.css"],
})
export class AdminMenuComponent implements OnInit {
  isExpanded = false;
  isAdmin = false;
  private _sessionManager: SessionManager;

  constructor(
    authService: AuthService,
    router: Router,
    jwtHelper: JwtHelperService
    // private authService: IAuthService,
    // private router: Router,
    // private jwtHelper: JwtHelperService
  ) {
    this._sessionManager = new SessionManager(authService, router, jwtHelper);
  }

  ngOnInit() {
    let status = null;
    if (window.innerWidth >= 1200)
      status = StorageHelper.getItem(StorageKey.AdminMenuStatus);

    this.isExpanded = status ? status : false;

    this.isAdmin = this._sessionManager.hasRole("Admin");
  }

  toggleNavbar() {
    this.isExpanded = !this.isExpanded;
    StorageHelper.setItem(StorageKey.AdminMenuStatus, this.isExpanded);
  }
}
