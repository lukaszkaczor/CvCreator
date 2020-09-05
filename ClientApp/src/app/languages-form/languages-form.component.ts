import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Language } from '../../Models/Language';

@Component({
  selector: 'languages-form',
  templateUrl: './languages-form.component.html',
  styleUrls: ['./languages-form.component.css']
})
export class LanguagesFormComponent implements OnInit {

  public languagesForm;
  public formIsInvalid;
  public languagesList: Language[] = [];

  constructor(builder: FormBuilder) {
    this.languagesForm = builder.group({
      language: ['', Validators.required],
      languageLevel: ['', Validators.required]
    })
  }

  ngOnInit() {
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
  }

  delete(index) {
    this.languagesList.splice(index, 1);
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
