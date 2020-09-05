import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { FixedForm } from '../../Models/FixedForm';
import { WorkExperience } from '../../Models/WorkExperience';
import { DateManager } from '../../Models/DateManager';

@Component({
  selector: 'experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {

  public experienceForm: FormGroup;
  public experienceList: WorkExperience[] = [];
  public dateManager: DateManager;
  public formIsInvalid = false;
  public index: number;
  public element;

  constructor(builder: FormBuilder, dateManager: DateManager) {
    // super();
    this.dateManager = dateManager;

    this.experienceForm = builder.group({
      workplace: ['', [Validators.required, Validators.minLength(3)]],
      business: [''],
      localization: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      stillWorking: [''],
      description: ['']
    })
  }

  ngOnInit() {
    this.element = <HTMLElement>document.querySelector("#experienceForm");



    this.experienceList.push(new WorkExperience('workplace', new Date(), new Date()));
    // this.objectList.push(new WorkExperience('workplace', new Date(), new Date()));
  }




  onSubmit(event) {
    // super();

    if (this.dateManager.startDateIsGreaterThanEndDate(this.startDate.value, this.endDate.value) ||
      this.dateManager.isFutureDate(this.startDate.value, this.endDate.value))
      this.experienceForm.setErrors({ 'INVALID': true });
    // this.startDate.setErrors({ 'incorrect': true })
    // this.experienceForm. = "INVALID";

    if (this.experienceForm.status === "INVALID") {
      this.formIsInvalid = true;
      return 0;
    }

    this.formIsInvalid = false;
    let item = new WorkExperience(this.workplace.value, this.startDate.value, this.endDate.value, this.business.value, this.localization.value,
      this.stillWorking.value, this.description.value);


    this.index == -1 ? this.experienceList.push(item) : this.experienceList[this.index] = item;

    this.hide(event);
    this.experienceForm.reset();
  }

  delete(index) {
    this.experienceList.splice(index, 1)
  }

  add() {
    this.index = -1;
    this.show();
  }

  public show(): void {
    this.element.style.display = "flex"
  }

  public hide(event): void {
    event.preventDefault();
    this.experienceForm.reset();
    this.element.style.display = "none";
  }


  edit(index) {
    this.index = index;
    this.workplace = this.experienceList[index].workplace as unknown as AbstractControl;
    // console.log(this.workplace.status);
    this.startDate = this.experienceList[index].startDate as unknown as AbstractControl;
    this.endDate = this.experienceList[index].endDate as unknown as AbstractControl;
    this.business = this.experienceList[index].business as unknown as AbstractControl;
    this.localization = this.experienceList[index].localization as unknown as AbstractControl;
    this.stillWorking = this.experienceList[index].stillWorking as unknown as AbstractControl;
    this.description = this.experienceList[index].description as unknown as AbstractControl;

    this.show();
  }

  get workplace() {
    return this.experienceForm.get('workplace');
  }
  set workplace(val) {
    this.workplace.setValue(val)
  }

  get business() {
    return this.experienceForm.get('business');
  }
  set business(val) {
    this.business.setValue(val)
  }

  get localization() {
    return this.experienceForm.get('localization');
  }
  set localization(val) {
    this.localization.setValue(val)
  }

  get startDate() {
    return this.experienceForm.get('startDate');
  }
  set startDate(val) {
    this.startDate.setValue(val)
  }

  get endDate() {
    return this.experienceForm.get('endDate');
  }
  set endDate(val) {
    this.endDate.setValue(val)
  }

  get stillWorking() {
    return this.experienceForm.get('stillWorking');
  }
  set stillWorking(val) {
    this.stillWorking.setValue(val)
  }

  get description() {
    return this.experienceForm.get('description');
  }
  set description(val) {
    this.description.setValue(val)
  }

}
