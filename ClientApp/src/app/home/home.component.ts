import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  value = "siema moredo";
  siema() {
    alert()
    const modalBtn = document.querySelector("#modalBtn");
    const modal = document.querySelector("#exampleModal");

    // modal.modal("show");

  }

  submit(f) {
    console.log(f);
  }
}
