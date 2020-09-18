import { Component, OnInit } from '@angular/core';
import { FormModel } from '../../../Models/FormModel';
import { StorageHelper } from '../../../Models/StorageHelper';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'hobby-form',
  templateUrl: './hobby-form.component.html',
  styleUrls: ['./hobby-form.component.css']
})
export class HobbyFormComponent extends FormModel implements OnInit {

  constructor(builder: FormBuilder) {
    super(new StorageHelper('hobbies'));
    this.index = 0;
    this.resetFormAfterSubmit = false;

    this.form = builder.group({
      hobby: [''],
    })
  }

  ngOnInit() {
    if (this.objectList.length > 0)
      this.hobby = this.objectList[0].hobby;
  }


  onSubmit(event) {
    super.onSubmit(event, { hobby: this.hobby.value })
  }

  get hobby() {
    return this.form.get('hobby');
  }


  set hobby(val) {
    this.hobby.setValue(val);
  }
}
