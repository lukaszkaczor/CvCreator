import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Language } from '../../Models/Language';
import { StorageHelper } from '../../Models/StorageHelper';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'languages-form',
  templateUrl: './languages-form.component.html',
  styleUrls: ['./languages-form.component.css']
})
export class LanguagesFormComponent implements OnInit {

  public languagesForm;
  public formIsInvalid;
  public languagesList: Language[] = [];

  private _storage: StorageHelper;

  constructor(builder: FormBuilder) {
    this.languagesForm = builder.group({
      language: ['', Validators.required],
      languageLevel: ['', Validators.required]
    })

    this._storage = new StorageHelper('languageList')
  }

  ngOnInit() {
    this.languagesList = this._storage.get()
  }

  submit() {

    if (this.languagesForm.status === "INVALID") {
      this.formIsInvalid = true;
      return 0;
    }

    this.formIsInvalid = false;
    if (!this.languageIsInTheList()) {
      this.languagesList.push(new Language(this.language.value, this.languageLevel.value));
      this.languagesForm.reset();
    }

    this._storage.set(this.languagesList)
  }

  delete(index) {
    this.languagesList.splice(index, 1);
    this._storage.set(this.languagesList)
  }

  public languageIsInTheList() {
    for (let index in this.languagesList)
      if (this.language.value != null && this.languagesList[index].language.toLowerCase() == this.language.value.toLowerCase())
        return true;

    return false;
  }
  public getLanguageLevels() {
    return ['podstawowy', 'średni', 'średnio zaawansowany', 'zaawansowany', 'ojczysty'];
  }

  get language() {
    return this.languagesForm.get('language');
  }
  get languageLevel() {
    return this.languagesForm.get('languageLevel');
  }
}
