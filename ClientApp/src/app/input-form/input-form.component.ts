import { Component, OnInit, ViewChild, AfterViewChecked, AfterViewInit, Input } from '@angular/core';
import { ImageManager } from '../../Models/ImageManager';
import { EducationFormComponent } from '../education-form/education-form.component';
import { Education } from '../../Models/Education';
// import { DefaultEducation } from '../../Models/DefaultEducation';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  @ViewChild(EducationFormComponent, null) child: EducationFormComponent;
  educationList: Education[] = [];
  value: number = 0;

  constructor() { }


  ngOnInit() {

    // this.educationList.push(new Education(new Date(1992, 1, 1), new Date(1995, 1, 1), false, "12345", "inzy", "opsi", "spec", "It"));
    this.educationList.push(new Education("school name", "degree", new Date(1, 1, 2005), new Date(1, 5, 2006), false, "course", "spec", "desc"));
    // this.educationList.push(new Education(new Date(1992, 1, 1), new Date(1995, 1, 1), false, "2", "inzy", "opsi", "spec", "It"));
    // this.educationList.push(new Education(new Date(1992, 1, 1), new Date(1995, 1, 1), false, "3", "inzy", "opsi", "spec", "It"));
    this.child.list = this.educationList;

  }

  transform() {
    const form = document.querySelector("form");

    this.value = (this.value >= 200) ? 0 : this.value += 100;

    form.style.transform = `translate(-${this.value}vw)`;
  }


  async readFile() {
    const preview = <HTMLImageElement>document.querySelector('#imgPreview');
    const file = (<HTMLInputElement>document.querySelector('#fileInput')).files[0];
    // const file = (<HTMLInputElement>document.querySelector('input[type=file]')).files[0];
    console.log(file);

    preview.src = (file != undefined) ? await ImageManager.Encode(file) : preview.src;


  }

  delete(index) {
    this.educationList.splice(index, 1);
  }

  edit(index) {
    // this.child.item = this.educationList[index];
    this.child.index = index;
    this.child.show();
  }

  add() {
    // this.child.item = new DefaultEducation();
    this.child.index = -1;
    this.child.show();
  }


}
