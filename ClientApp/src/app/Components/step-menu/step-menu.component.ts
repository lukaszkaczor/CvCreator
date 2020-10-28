import { Component, OnInit } from "@angular/core";

@Component({
  selector: "step-menu",
  templateUrl: "./step-menu.component.html",
  styleUrls: ["./step-menu.component.css"],
})
export class StepMenuComponent {
  isExpanded = false;

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
