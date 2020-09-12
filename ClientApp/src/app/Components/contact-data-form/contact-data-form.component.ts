import { Component, OnInit } from '@angular/core';
import { FormModel } from '../../../Models/FormModel';
import { StorageHelper } from '../../../Models/StorageHelper';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact-data-form',
  templateUrl: './contact-data-form.component.html',
  styleUrls: ['./contact-data-form.component.css']
})
export class ContactDataFormComponent extends FormModel implements OnInit {

  formSubmitted = false;

  constructor(builder: FormBuilder) {
    super(new StorageHelper('contact'));
    this.index = 0;
    this.resetFormAfterSubmit = false;

    this.form = builder.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  ngOnInit() {
    if (this.objectList.length > 0) {
      this.email = this.objectList[0].email;
      this.phoneNumber = this.objectList[0].phoneNumber;
    }
  }

  onSubmit(event) {
    console.log(this.form)

    this.formSubmitted = true;
    if (this.form.status == "INVALID") {
      return 0
    }

    this.formSubmitted = false;
    super.onSubmit(event, { email: this.email.value, phoneNumber: this.phoneNumber.value })
  }


  get email() {
    return this.form.get('email');
  }
  set email(val) {
    this.email.setValue(val)
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
  set phoneNumber(val) {
    this.phoneNumber.setValue(val)
  }

}
