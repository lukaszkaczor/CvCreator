import { Component, OnInit } from "@angular/core";
import { FormModel } from "../../../Models/FormModel";
import { StorageKey } from "../../../Models/StorageKey";
import { StorageHelper } from "../../../Models/StorageHelper";
import { ModelType } from "src/Models/Enums/ModelType";
import { FormBuilder, Validators } from "@angular/forms";
import { ISocialMedia } from "../../../Models/Interfaces/ISocialMedia";

@Component({
  selector: "social-media-form",
  templateUrl: "./social-media-form.component.html",
  styleUrls: ["./social-media-form.component.css"],
})
export class SocialMediaFormComponent extends FormModel implements OnInit {
  public formIsInvalid;

  constructor(builder: FormBuilder) {
    super(new StorageHelper(StorageKey.SocialMedia), ModelType.Array);
    this.index = -1;

    this.form = builder.group({
      name: ["", Validators.required],
      url: ["", Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit(event) {
    if (this.form.status === "INVALID") {
      this.formIsInvalid = true;
      return 0;
    }

    this.formIsInvalid = false;

    const item: ISocialMedia = { name: this.name.value, url: this.url.value };

    super.onSubmit(event, item);
  }

  get name() {
    return this.form.get("name");
  }
  get url() {
    return this.form.get("url");
  }
}
