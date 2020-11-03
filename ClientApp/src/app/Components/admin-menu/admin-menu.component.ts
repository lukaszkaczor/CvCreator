import { Component, OnInit } from "@angular/core";
import { StorageHelper } from "../../../Models/StorageHelper";
import { StorageKey } from "../../../Models/StorageKey";

@Component({
  selector: "admin-menu",
  templateUrl: "./admin-menu.component.html",
  styleUrls: ["./admin-menu.component.css"],
})
export class AdminMenuComponent implements OnInit {
  isExpanded = false;
  constructor() {}

  ngOnInit() {
    let status = null;
    if (window.innerWidth >= 1200)
      status = StorageHelper.getItem(StorageKey.AdminMenuStatus);

    this.isExpanded = status ? status : false;
  }

  toggleNavbar() {
    this.isExpanded = !this.isExpanded;
    StorageHelper.setItem(StorageKey.AdminMenuStatus, this.isExpanded);
  }
}
