import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormModel } from '../../../Models/FormModel';
import { StorageHelper } from '../../../Models/StorageHelper';
import { DateManager } from '../../../Models/DateManager';
import { IBasicData } from '../../../Models/Interfaces/IBasicData';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

@Component({
  selector: 'personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.css']
})
export class PersonalDataFormComponent extends FormModel implements OnInit {

  public dateManager: DateManager;
  formSubmitted = false;


  constructor(builder: FormBuilder, dateManager: DateManager) {
    super(new StorageHelper('basicData'))
    this.dateManager = dateManager;
    this.index = 0;
    this.resetFormAfterSubmit = false;

    this.form = builder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  ngOnInit() {
    if (this.objectList.length > 0) {
      this.firstName = this.objectList[0].firstName;
      this.lastName = this.objectList[0].lastName;
      this.dateOfBirth = this.dateManager.transformDate(this.objectList[0].dateOfBirth) as unknown as AbstractControl;
    }
  }

  onSubmit(event) {
    console.log(this.form)
    // if ()

    this.formSubmitted = true;

    if (this.dateManager.isFutureDate(this.dateOfBirth.value) || this.form.status === "INVALID") {
      this.form.setErrors({ 'invalid': true })
      return 0;
    }

    this.formSubmitted = false;
    super.onSubmit(event, { firstName: this.firstName.value, lastName: this.lastName.value, dateOfBirth: this.dateOfBirth.value } as IBasicData)
  }


  get firstName() {
    return this.form.get('firstName');
  }
  set firstName(val) {
    this.firstName.setValue(val)
  }

  get lastName() {
    return this.form.get('lastName');
  }
  set lastName(val) {
    this.lastName.setValue(val)
  }

  get dateOfBirth() {
    return this.form.get('dateOfBirth');
  }
  set dateOfBirth(val) {
    this.dateOfBirth.setValue(val)
  }
}
