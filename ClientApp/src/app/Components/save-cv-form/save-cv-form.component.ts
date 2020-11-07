import { IUsersDocument } from "./../../../Models/Interfaces/IUsersDocument";
import { UsersDocumentsService } from "./../../Services/users-documents.service";
import { HttpClient } from "@angular/common/http";
import { Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { REFERENCE_PREFIX } from "@angular/compiler/src/render3/view/util";

@Component({
  selector: "save-cv-form",
  templateUrl: "./save-cv-form.component.html",
  styleUrls: ["./save-cv-form.component.css"],
})
export class SaveCvFormComponent implements OnInit {
  @ViewChild("background", { static: true }) background: ElementRef;

  form: FormGroup;
  formSubmitted = false;

  html: string;
  styles: string;

  constructor(builder: FormBuilder, private service: UsersDocumentsService) {
    this.form = builder.group({
      name: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    console.log(this.background);
  }

  onSubmit($event) {
    this.formSubmitted = true;

    if (this.form.status === "INVALID") return 0;

    this.formSubmitted = false;

    const document: IUsersDocument = {
      Name: this.name.value,
      Html: this.html,
      Styles: this.styles,
    };

    this.service.post(document).subscribe(
      (response) => {
        console.log(response);
        this.toggle();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggle() {
    this.background.nativeElement.classList.toggle("hidden");
  }

  get name() {
    return this.form.get("name");
  }
}
