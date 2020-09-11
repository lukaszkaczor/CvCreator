import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { FixedFormModel } from '../../../Models/FixedFormModel';
import { WorkExperience } from '../../../Models/WorkExperience';
import { DateManager } from '../../../Models/DateManager';
import { StorageHelper } from 'src/Models/StorageHelper';
import { IWorkExperience } from '../../../Models/Interfaces/IWorkExperience';

@Component({
  selector: 'experience-form',
  templateUrl: './work-experience-form.component.html',
  styleUrls: ['./work-experience-form.component.css']
})
export class ExperienceFormComponent extends FixedFormModel implements OnInit {

  public dateManager: DateManager;

  constructor(builder: FormBuilder) {
    super(new StorageHelper('experienceList'));
    this.dateManager = new DateManager();

    this.form = builder.group({
      workplace: ['', [Validators.required, Validators.minLength(3)]],
      business: [''],
      localization: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      stillWorking: [false],
      description: ['']
    })
  }

  ngOnInit() {
    this.element = <HTMLElement>document.querySelector("#workExperienceForm");
  }

  onCheckboxChange() {
    this.stillWorking.value ? this.endDate.disable() : this.endDate.enable();
    console.log(this.stillWorking.value)
  }

  onSubmit(event) {

    if (this.dateManager.isFutureDate(this.startDate.value, this.endDate.value) ||
      this.dateManager.startDateIsGreaterThanEndDate(this.startDate.value, this.endDate.value)) {
      this.form.setErrors({ 'invalid': true })
      return 0;
    }

    let item: IWorkExperience = {
      workplace: this.workplace.value, startDate: this.startDate.value, endDate: this.endDate.value,
      business: this.business.value, localization: this.localization.value, stillWorking: this.stillWorking.value, description: this.description.value
    };
    super.onSubmit(event, item);
  }

  add() {
    this.endDate.enable();
    super.add();
  }

  edit(index) {
    this.index = index;

    this.workplace = this.objectList[index].workplace as unknown as AbstractControl;
    this.startDate = this.dateManager.transformDate(this.objectList[index].startDate) as unknown as AbstractControl;
    this.endDate = this.dateManager.transformDate(this.objectList[index].endDate) as unknown as AbstractControl;
    this.business = this.objectList[index].business as unknown as AbstractControl;
    this.localization = this.objectList[index].localization as unknown as AbstractControl;
    this.stillWorking = this.objectList[index].stillWorking as unknown as AbstractControl;
    this.description = this.objectList[index].description as unknown as AbstractControl;

    this.stillWorking.value ? this.endDate.disable() : this.endDate.enable();
    this.show();
  }

  get workplace() {
    return this.form.get('workplace');
  }
  set workplace(val) {
    this.workplace.setValue(val)
  }

  get business() {
    return this.form.get('business');
  }
  set business(val) {
    this.business.setValue(val)
  }

  get localization() {
    return this.form.get('localization');
  }
  set localization(val) {
    this.localization.setValue(val)
  }

  get startDate() {
    return this.form.get('startDate');
  }
  set startDate(val) {
    this.startDate.setValue(val)
  }

  get endDate() {
    return this.form.get('endDate');
  }
  set endDate(val) {
    this.endDate.setValue(val)
  }

  get stillWorking() {
    return this.form.get('stillWorking');
  }
  set stillWorking(val) {
    this.stillWorking.setValue(val)
  }

  get description() {
    return this.form.get('description');
  }
  set description(val) {
    this.description.setValue(val)
  }
}
