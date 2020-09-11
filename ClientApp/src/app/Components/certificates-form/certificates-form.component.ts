import { Component, OnInit } from '@angular/core';
import { FixedFormModel } from '../../../Models/FixedFormModel';
import { StorageHelper } from '../../../Models/StorageHelper';
import { FormBuilder, Validators } from '@angular/forms';
import { DateManager } from '../../../Models/DateManager';
import { ICertificate } from '../../../Models/Interfaces/ICertificate';

@Component({
  selector: 'certificates-form',
  templateUrl: './certificates-form.component.html',
  styleUrls: ['./certificates-form.component.css']
})
export class CertificatesFormComponent extends FixedFormModel implements OnInit {

  public dateManager: DateManager;


  constructor(builder: FormBuilder) {
    super(new StorageHelper('certificatesList'));

    this.dateManager = new DateManager();

    this.form = builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      organizer: [''],
      date: [''],
      description: ['']
    })
  }

  edit(index) {
    this.index = index;

    this.name = this.objectList[index].name;
    this.organizer = this.objectList[index].organizer;
    this.date = this.objectList[index].date;
    this.description = this.objectList[index].description;

    this.show();
  }

  onSubmit(event) {

    if (this.dateManager.isFutureDate(this.date.value)) {
      this.form.setErrors({ 'invalid': true })
      return 0;
    }

    let item: ICertificate = {
      name: this.name.value,
      organizer: this.organizer.value,
      date: this.dateManager.transformDate(this.date.value),
      description: this.description.value
    }

    super.onSubmit(event, item);
  }

  ngOnInit() {
    this.element = <HTMLElement>document.querySelector("#certificatesForm");
  }


  get name() {
    return this.form.get('name');
  }
  set name(val) {
    this.name.setValue(val)
  }

  get organizer() {
    return this.form.get('organizer');
  }
  set organizer(val) {
    this.organizer.setValue(val)
  }

  get date() {
    return this.form.get('date');
  }
  set date(val) {
    this.date.setValue(val)
  }

  get description() {
    return this.form.get('description');
  }
  set description(val) {
    this.description.setValue(val)
  }

}
