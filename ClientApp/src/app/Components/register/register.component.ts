import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/Services/auth.service";
import { IRegisterCreditentials } from "../../../Models/Interfaces/IRegisterCreditentials";
import { ILoginCreditentials } from "../../../Models/Interfaces/ILoginCreditentials";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  passwordsAreNotEqual = false;
  errorMessage: string = null;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.form = formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;

    if (this.password.value != this.confirmPassword.value) {
      this.passwordsAreNotEqual = true;
      this.form.setErrors({ INVALID: true });
    }

    if (this.form.status === "INVALID") {
      return 0;
    }

    this.passwordsAreNotEqual = false;
    this.submitted = false;

    const creditentials: IRegisterCreditentials = {
      email: this.email.value,
      password: this.password.value,
      confirmPassword: this.confirmPassword.value,
    };

    this.auth.register(creditentials).subscribe(
      (response) => {
        this.auth
          .login({
            email: this.email.value,
            password: this.password.value,
          } as ILoginCreditentials)
          .subscribe((response) => {
            const token = (<any>response).token;
            localStorage.setItem("token", token);
            this.router.navigate(["/"]);
          });
      },
      (err) => {
        this.errorMessage = err.error;
        console.log(err);
      }
    );
  }

  get email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("password");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}
