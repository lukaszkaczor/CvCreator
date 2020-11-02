import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  login(form: NgForm) {
    const creditentials = {
      email: form.value.email,
      password: form.value.password,
    };

    this.http
      .post("https://localhost:5001/api/account/login", creditentials)
      .subscribe(
        (response) => {
          const token = (<any>response).token;
          localStorage.setItem("token", token);
          this.invalidLogin = false;
          this.router.navigate(["/"]);
        },
        (err) => {
          this.invalidLogin = true;
        }
      );
  }
}
