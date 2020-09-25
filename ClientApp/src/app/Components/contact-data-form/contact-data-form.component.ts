import { Component, OnInit } from "@angular/core";
import { FormModel } from "../../../Models/FormModel";
import { StorageHelper } from "../../../Models/StorageHelper";
import { FormBuilder, Validators } from "@angular/forms";
import { ModelType } from "src/Models/Enums/ModelType";
import { StorageKey } from "../../../Models/StorageKey";

@Component({
  selector: "contact-data-form",
  templateUrl: "./contact-data-form.component.html",
  styleUrls: ["./contact-data-form.component.css"],
})
export class ContactDataFormComponent extends FormModel implements OnInit {
  formSubmitted = false;

  constructor(builder: FormBuilder) {
    super(new StorageHelper(StorageKey.Contact), ModelType.Object);
    this.index = 0;
    this.resetFormAfterSubmit = false;

    this.form = builder.group({
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    if (this.data != null) {
      this.email = this.data.email;
      this.phoneNumber = this.data.phoneNumber;
    }
  }

  onSubmit(event) {
    console.log(this.form);

    this.formSubmitted = true;
    if (this.form.status == "INVALID") {
      return 0;
    }

    this.formSubmitted = false;
    super.onSubmit(event, {
      email: this.email.value,
      phoneNumber: this.phoneNumber.value,
    });
  }

  get email() {
    return this.form.get("email");
  }
  set email(val) {
    this.email.setValue(val);
  }

  get phoneNumber() {
    return this.form.get("phoneNumber");
  }
  set phoneNumber(val) {
    this.phoneNumber.setValue(val);
  }
}
