import { Component, OnInit } from '@angular/core';
import { DataService } from '../input-form/data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {


  message: string;
  constructor(private data: DataService) {


  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = this.message);
  }

  value = "siema moredo";


}
