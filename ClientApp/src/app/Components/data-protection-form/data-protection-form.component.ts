import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ModelType } from "src/Models/Enums/ModelType";
import { FormModel } from "../../../Models/FormModel";
import { StorageHelper } from "../../../Models/StorageHelper";
import { StorageKey } from "../../../Models/StorageKey";

@Component({
  selector: "data-protection-form",
  templateUrl: "./data-protection-form.component.html",
  styleUrls: ["./data-protection-form.component.css"],
})
export class DataProtectionFormComponent extends FormModel implements OnInit {
  constructor(builder: FormBuilder) {
    super(new StorageHelper(StorageKey.DataProtection), ModelType.Object);
    this.index = 0;
    this.resetFormAfterSubmit = false;

    this.form = builder.group({
      text: [""],
    });
  }

  ngOnInit() {
    if (this.data != null) this.text.setValue(this.data.text);
  }

  onSubmit(event) {
    super.onSubmit(event, { text: this.text.value });
  }

  get text() {
    return this.form.get("text");
  }

  set text(val) {
    this.text.setValue(val);
  }
}
