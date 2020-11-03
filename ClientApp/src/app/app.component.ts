import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { SessionManager } from "../Models/SessionManager";
import { AuthService } from "./Services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "app";
  sessionManager: SessionManager;

  constructor(auth: AuthService, router: Router, jwt: JwtHelperService) {
    this.sessionManager = new SessionManager(auth, router, jwt);
  }

  onActivate(event) {
    window.scroll(0, 0);
  }
}
