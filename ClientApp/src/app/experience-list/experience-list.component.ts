import { Component, OnInit, Input } from '@angular/core';
import { WorkExperience } from '../../Models/WorkExperience';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {

  @Input() list: WorkExperience[];

  constructor() { }

  ngOnInit() {
  }

  add() {
    // this
  }

}
