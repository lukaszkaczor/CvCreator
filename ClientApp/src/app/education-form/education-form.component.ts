import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../../Models/Education';
import { IEducation } from '../../Models/Interfaces/IEducation';
import { Validators, FormBuilder } from '@angular/forms';



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
  @Input() list: IEducation[];

  constructor(builder: FormBuilder) {
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
  }

  ngOnInit() {
    this.element = <HTMLElement>document.querySelector(".background");
  }

  submit(event) {
    event.preventDefault();
    console.log(this.educationForm)

    if (this.educationForm.status === 'INVALID') {
      this.formIsInvalid = true;
      return 0;
    }

    let endDate = this.stillStudying ? null : new Date(this.endDate.value);

    let item = new Education(new Date(this.startDate.value), endDate, this.stillStudying.value, this.schoolName.value,
      this.degree.value, this.description.value, this.specialization.value, this.courseOfStudy.value)

    this.index == -1 ? this.list.push(item) : this.list[this.index] = item;

    this.hide(event);
  }

  onCheckboxChange() {
    this.stillStudying.value ? this.endDate.disable() : this.endDate.enable();
  }


  show() {
    this.element.style.display = "flex";
    if (this.index != -1) {
      this.schoolName = this.list[this.index].SchoolName;
      this.courseOfStudy = this.list[this.index].CourseOfStudy;
      this.degree = this.list[this.index].Deegree;
      this.specialization = this.list[this.index].Specialization;
      this.startDate = this.list[this.index].StartDate;
      this.endDate = this.list[this.index].EndDate;
      this.stillStudying = this.list[this.index].StillStudying;
      this.description = this.list[this.index].Desctiption;
    }
  }

  hide(event) {
    event.preventDefault();
    this.element.style.display = "none";
    this.formIsInvalid = false;
    this.educationForm.reset();
  }


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
