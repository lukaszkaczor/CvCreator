import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../Services/auth.service";
import { ILoginCreditentials } from "../../../Models/Interfaces/ILoginCreditentials";
import { SessionManager } from "../../../Models/SessionManager";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  private _sessionManager: SessionManager;
  form: FormGroup;
  invalidLogin: boolean;
  submitted = false;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private jwtHelper: JwtHelperService
  ) {
    this.form = formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required],
    });

    this._sessionManager = new SessionManager(auth, router, jwtHelper);
  }

  ngOnInit() {
    // if (this._sessionManager.isUserAuthenticated()) this.router.navigate(["/"]);
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.status === "INVALID") return 0;

    this.submitted = false;

    const creditentials: ILoginCreditentials = {
      email: this.email.value,
      password: this.password.value,
    };

    this.invalidLogin = this._sessionManager.LogIn(creditentials);
  }

  get email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("password");
  }
}
