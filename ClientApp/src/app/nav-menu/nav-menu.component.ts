import { Component } from "@angular/core";
import { SessionManager } from "../../Models/SessionManager";
import { AuthService } from "../Services/auth.service";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.css"],
})
export class NavMenuComponent {
  isExpanded = false;
  sessionManager: SessionManager;

  constructor(auth: AuthService, router: Router, jwt: JwtHelperService) {
    this.sessionManager = new SessionManager(auth, router, jwt);
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
