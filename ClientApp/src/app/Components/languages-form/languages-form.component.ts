import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { StorageHelper } from "../../../Models/StorageHelper";
import { FormModel } from "../../../Models/FormModel";
import { ILanguage } from "../../../Models/Interfaces/ILanguage";
import { ModelType } from "src/Models/Enums/ModelType";
import { StorageKey } from "../../../Models/StorageKey";

@Component({
  selector: "languages-form",
  templateUrl: "./languages-form.component.html",
  styleUrls: ["./languages-form.component.css"],
})
export class LanguagesFormComponent extends FormModel implements OnInit {
  public formIsInvalid;

  constructor(builder: FormBuilder) {
    super(new StorageHelper(StorageKey.Languages), ModelType.Array);
    this.index = -1;

    this.form = builder.group({
      language: ["", Validators.required],
      level: ["", Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit(event) {
    if (this.form.status === "INVALID") {
      this.formIsInvalid = true;
      return 0;
    }

    this.formIsInvalid = false;
    if (!this.languageIsInTheList())
      super.onSubmit(event, {
        language: this.language.value,
        level: this.level.value,
      } as ILanguage);
  }

  public languageIsInTheList() {
    for (let index in this.data)
      if (
        this.language.value != null &&
        this.data[index].language.toLowerCase() ==
          this.language.value.toLowerCase()
      )
        return true;

    return false;
  }

  public getLanguageLevels() {
    return [
      "B2",
      "podstawowy",
      "średni",
      "średnio zaawansowany",
      "zaawansowany",
      "ojczysty",
    ];
  }

  get language() {
    return this.form.get("language");
  }
  get level() {
    return this.form.get("level");
  }
}
