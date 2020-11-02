import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AnonymousSubject } from "rxjs/internal/Subject";
import html2canvas from "html2canvas";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"],
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://localhost:5001/api/customers").subscribe(
      (response) => {
        this.customers = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
