import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { FixedFormModel } from '../../../Models/FixedFormModel';
import { DateManager } from '../../../Models/DateManager';
import { StorageHelper } from '../../../Models/StorageHelper';
import { IEducation } from '../../../Models/Interfaces/IEducation';



@Component({
  selector: 'education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent extends FixedFormModel implements OnInit {
  // public objectList: Education[];
  // list: Education[];

  public dateManager: DateManager;
  // private _storage: StorageHelper;


  // @Input() list: IEducation[];

  constructor(builder: FormBuilder) {
    super(new StorageHelper('educationList'));

    this.dateManager = new DateManager();
    // this._storage = new StorageHelper('educationList');

    this.form = builder.group({
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
    this.element = <HTMLElement>document.querySelector("#educationForm");
  }

  onCheckboxChange() {
    this.stillStudying.value ? this.endDate.disable() : this.endDate.enable();
    console.log(this.stillStudying.value)
  }

  onSubmit(event) {

    if (this.dateManager.isFutureDate(this.startDate.value, this.endDate.value) ||
      this.dateManager.startDateIsGreaterThanEndDate(this.startDate.value, this.endDate.value)) {
      this.form.setErrors({ 'invalid': true })
      return 0;
    }

    let item: IEducation = {
      schoolName: this.schoolName.value, degree: this.degree.value,
      startDate: this.startDate.value, endDate: this.endDate.value,
      stillStudying: this.stillStudying.value, courseOfStudy: this.courseOfStudy.value,
      specialization: this.specialization.value, description: this.description.value
    }
    // let item:IEducation = new Education(this.schoolName.value, this.degree.value, this.startDate.value, this.endDate.value,
    //   this.stillStudying.value, this.courseOfStudy.value, this.specialization.value, this.description.value)



    super.onSubmit(event, item);
  }

  add() {
    this.endDate.enable();
    super.add();
  }

  public edit(index: any) {
    this.index = index;

    this.schoolName = this.objectList[index].schoolName;
    this.degree = this.objectList[index].degree;
    this.courseOfStudy = this.objectList[index].courseOfStudy;
    this.specialization = this.objectList[index].specialization;
    this.startDate = this.dateManager.transformDate(this.objectList[index].startDate) as unknown as AbstractControl;
    this.endDate = this.dateManager.transformDate(this.objectList[index].endDate) as unknown as AbstractControl;
    this.stillStudying = this.objectList[index].stillStudying;
    this.description = this.objectList[index].description;

    this.stillStudying.value ? this.endDate.disable() : this.endDate.enable();
    this.show();
  }


  public getDegreeList(): string[] {
    return ['podstawowe', 'zawodowe', 'średnie', 'licencjat', 'inżynier', 'magister', 'magister inżynier',
      'lekarz medycyny', 'studia podyplomowe', 'dokotrat', 'doktor hab.', 'profesor'];
  }


  get schoolName() {
    return this.form.get('schoolName');
  }
  set schoolName(val) {
    this.schoolName.setValue(val)
  }

  get courseOfStudy() {
    return this.form.get('courseOfStudy');
  }
  set courseOfStudy(val) {
    this.courseOfStudy.setValue(val)
  }

  get degree() {
    return this.form.get('degree');
  }
  set degree(val) {
    this.degree.setValue(val)
  }

  get specialization() {
    return this.form.get('specialization');
  }
  set specialization(val) {
    this.specialization.setValue(val)
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

  get stillStudying() {
    return this.form.get('stillStudying');
  }
  set stillStudying(val) {
    this.stillStudying.setValue(val)
  }

  get description() {
    return this.form.get('description');
  }
  set description(val) {
    this.description.setValue(val)
  }
}
