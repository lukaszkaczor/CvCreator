import { ILanguage } from "./../../../Models/Interfaces/ILanguage";
import { Component, OnInit } from "@angular/core";
import { FormModel } from "../../../Models/FormModel";
import { StorageHelper } from "../../../Models/StorageHelper";
import { FormBuilder, Validators } from "@angular/forms";
import { ModelType } from "src/Models/Enums/ModelType";
import { StorageKey } from "../../../Models/StorageKey";
import { IHobby } from "src/Models/Interfaces/IHobby";

@Component({
  selector: "hobby-form",
  templateUrl: "./hobby-form.component.html",
  styleUrls: ["./hobby-form.component.css"],
})
export class HobbyFormComponent extends FormModel implements OnInit {
  constructor(builder: FormBuilder) {
    super(new StorageHelper(StorageKey.Hobbies), ModelType.Array);
    this.index = -1;
    // this.resetFormAfterSubmit = false;

    this.form = builder.group({
      hobby: ["", Validators.required],
    });
  }

  ngOnInit() {
    // if (this.data != null) this.hobby = this.data.hobby;
  }

  onSubmit(event) {
    if (!this.form.valid) return null;

    super.onSubmit(event, { hobby: this.hobby.value } as IHobby);
    // super.onSubmit(event, { hobby: this.hobby.value } as ILanguage);
  }

  get hobby() {
    return this.form.get("hobby");
  }

  set hobby(val) {
    this.hobby.setValue(val);
  }
}
