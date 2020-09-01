import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Education } from '../../Models/Education';
import { IEducation } from '../../Models/Interfaces/IEducation';
import { DefaultEducation } from '../../Models/DefaultEducation';
import { NgForm, FormControl } from '@angular/forms';


@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {

  public element;

  @Input() item: IEducation;
  index: number | null;
  @Input() list: IEducation[];

  constructor() { }

  ngOnInit() {
    this.item = new DefaultEducation();
    this.element = <HTMLElement>document.querySelector(".background");
  }

  submit(form: NgForm, e) {
    e.preventDefault();

    let schoolName = form.controls['schoolName'].value;
    let courseOfStudy = form.controls['courseOfStudy'].value;
    let deegree = form.controls['degree'].value;
    let specialization = form.controls['specialization'].value;
    let startDate = form.controls['startDate'].value;
    let endDate = form.controls['endDate'].value;
    let descriptionn = form.controls['description'].value;
    let stillStudying = form.controls['stillStudying'].value;


    let data = new Education(new Date(startDate), new Date(endDate), stillStudying, schoolName, deegree, descriptionn, specialization, courseOfStudy);

    if (this.index == -1) {
      this.list.push(data);
    } else {
      this.list[this.index] = data;
      // this.item.SchoolName = schoolName;
      // this.item.CourseOfStudy = courseOfStudy;
      // this.item.Deegree = deegree;
      // this.item.Specialization = specialization;
      // this.item.StartDate = startDate;
      // this.item.EndDate = endDate;
      // this.item.Desctiption = descriptionn;
      // this.item.StillStudying = stillStudying;
    }

    form.reset();
    this.hide();
  }


  show() {
    this.element.style.display = "flex";
  }

  hide() {
    this.element.style.display = "none";
    this.item = new DefaultEducation();
  }
}
