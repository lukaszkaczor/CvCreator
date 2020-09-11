import { Component, OnInit } from '@angular/core';

import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {


  message: string;
  constructor() {


  }

  ngOnInit(): void {
  }

  value = "siema moredo";


}
