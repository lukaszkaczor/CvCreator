import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ModelType } from "src/Models/Enums/ModelType";
import { StorageHelper } from "src/Models/StorageHelper";
import { FormModel } from "../../../Models/FormModel";
import { StorageKey } from "../../../Models/StorageKey";

@Component({
  selector: "address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.css"],
})
export class AddressFormComponent extends FormModel implements OnInit {
  formSubmitted = false;

  constructor(builder: FormBuilder) {
    super(new StorageHelper(StorageKey.Address), ModelType.Object);
    // this.index = 0;
    this.resetFormAfterSubmit = false;

    this.form = builder.group({
      country: [""],
      city: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() {
    if (this.data != null) {
      this.city = this.data.city;
      this.country = this.data.country;
    }
  }

  onSubmit(event) {
    this.formSubmitted = true;
    if (this.form.status == "INVALID") {
      return 0;
    }

    this.formSubmitted = false;
    super.onSubmit(event, {
      country: this.country.value,
      city: this.city.value,
    });
  }

  get country() {
    return this.form.get("country");
  }
  set country(val) {
    this.country.setValue(val);
  }

  get city() {
    return this.form.get("city");
  }
  set city(val) {
    this.city.setValue(val);
  }
}
