import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../../Models/Education';
import { IEducation } from '../../Models/Interfaces/IEducation';
import { Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {
  public educationForm;
  public element: HTMLElement;
  public formIsInvalid = false;
  public index: number | null;
  public startDateIsGreaterThanEndDate2 = false;

  private _datePipe: DatePipe

  @Input() list: IEducation[];

  constructor(builder: FormBuilder, datePipe: DatePipe) {
    this.educationForm = builder.group({
      schoolName: ['', [Validators.required, Validators.minLength(5)]],
      courseOfStudy: [''],
      degree: ['', Validators.required],
      specialization: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      stillStudying: [false],
      description: ['']
    });

    this._datePipe = datePipe;
  }

  ngOnInit() {
    this.element = <HTMLElement>document.querySelector(".background");
  }

  submit(event) {
    event.preventDefault();

    if (this.startDateIsGreaterThanEndDate() ||
      this.isFutureDate(this.startDate.value, this.endDate.value))
      this.educationForm.status = "INVALID";

    if (this.educationForm.status === 'INVALID') {
      this.formIsInvalid = true;
      return 0;
    }

    console.log(this.endDate.value);
    let endDate = this.stillStudying.value ? null : new Date(this.endDate.value);

    // let item = new Education(new Date(this.startDate.value), endDate, this.stillStudying.value, this.schoolName.value,
    //   this.degree.value, this.description.value, this.specialization.value, this.courseOfStudy.value)

    let item = new Education(this.schoolName.value, this.degree.value, new Date(this.startDate.value), endDate, this.stillStudying.value, this.courseOfStudy.value,
      this.specialization.value, this.description.value)

    this.index == -1 ? this.list.push(item) : this.list[this.index] = item;

    this.hide(event);
  }

  onCheckboxChange() {
    this.stillStudying.value ? this.endDate.disable() : this.endDate.enable();
  }

  show() {
    this.endDate.enable();

    this.element.style.display = "flex";
    if (this.index != -1) {
      this.schoolName = this.list[this.index].schoolName;
      this.courseOfStudy = this.list[this.index].courseOfStudy;
      this.degree = this.list[this.index].degree;
      this.specialization = this.list[this.index].specialization;
      this.startDate = this.transformDate(this.list[this.index].startDate);
      this.endDate = this.transformDate(this.list[this.index].endDate);
      this.stillStudying = this.list[this.index].stillStudying;
      this.description = this.list[this.index].description;

      console.log(this.stillStudying)

      this.stillStudying.value ? this.endDate.disable() : this.endDate.enable();

    }
  }

  hide(event) {
    event.preventDefault();
    this.element.style.display = "none";
    this.formIsInvalid = false;
    this.educationForm.reset();
  }


  private transformDate(date: Date, format: string = 'yyyy-MM-dd') {
    return this._datePipe.transform(date, format)
  }

  public startDateIsGreaterThanEndDate() {
    if (this.startDate.value == null || this.endDate.value == null) return false;
    return new Date(this.startDate.value) > new Date(this.endDate.value)
  }

  public isFutureDate(...dates: string[]): boolean {
    const today = new Date();

    for (let index in dates) {
      if (today < new Date(dates[index])) return true;
    }

    return false;
  }

  public getDegreeList(): string[] {
    return ['podstawowe', 'zawodowe', 'średnie', 'licencjat', 'inżynier', 'magister', 'magister inżynier',
      'lekarz medycyny', 'studia podyplomowe', 'dokotrat', 'doktor hab.', 'profesor'];
  }
  // public futureDate(date: Date): boolean {
  //   return new Date() < date;
  // }

  get schoolName() {
    return this.educationForm.get('schoolName');
  }
  set schoolName(val) {
    this.schoolName.setValue(val)
  }

  get courseOfStudy() {
    return this.educationForm.get('courseOfStudy');
  }
  set courseOfStudy(val) {
    this.courseOfStudy.setValue(val)
  }

  get degree() {
    return this.educationForm.get('degree');
  }
  set degree(val) {
    this.degree.setValue(val)
  }

  get specialization() {
    return this.educationForm.get('specialization');
  }
  set specialization(val) {
    this.specialization.setValue(val)
  }

  get startDate() {
    return this.educationForm.get('startDate');
  }
  set startDate(val) {
    this.startDate.setValue(val)
  }

  get endDate() {
    return this.educationForm.get('endDate');
  }
  set endDate(val) {
    this.endDate.setValue(val)
  }

  get stillStudying() {
    return this.educationForm.get('stillStudying');
  }
  set stillStudying(val) {
    this.stillStudying.setValue(val)
  }

  get description() {
    return this.educationForm.get('description');
  }
  set description(val) {
    this.description.setValue(val)
  }
}
