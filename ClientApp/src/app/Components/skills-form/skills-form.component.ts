import { Component, OnInit } from '@angular/core';
import { FormModel } from '../../../Models/FormModel';
import { StorageHelper } from '../../../Models/StorageHelper';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent extends FormModel implements OnInit {

  formIsInvalid = false;

  constructor(builder: FormBuilder) {
    super(new StorageHelper('skills'));
    this.index = -1;

    this.form = builder.group({
      skill: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit(event) {

    if (this.form.status === "INVALID") {
      this.formIsInvalid = true;
      return 0;
    }

    this.formIsInvalid = false;
    super.onSubmit(event, { skill: this.skill.value })
  }


  get skill() {
    return this.form.get('skill');
  }
}
