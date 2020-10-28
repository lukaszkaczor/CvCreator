import { Component, OnInit, enableProdMode } from "@angular/core";
import { IEducation } from "../../../Models/Interfaces/IEducation";
import { ILanguage } from "../../../Models/Interfaces/ILanguage";
import { HtmlTemplateService } from "./html-template.service";
import { Template } from "../../../Models/Template";
import { MainSelector } from "../../../Models/MainSelector";
import { StorageHelper } from "../../../Models/StorageHelper";
import { StorageKey } from "../../../Models/StorageKey";
import { CVData } from "../../../Models/CVData";
import { ListSelector } from "../../../Models/ListSelector";
import { RemoveIfEmptySelector } from "../../../Models/RemoveIfEmptySelector";
import { ITagWithSkills } from "../../../Models/Interfaces/ITagWithSkills";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

@Component({
  selector: "cv-preview",
  templateUrl: "./cv-preview.component.html",
  styleUrls: ["./cv-preview.component.css"],
})
export class CvPreviewComponent implements OnInit {
  private _template: string;
  private _element: HTMLElement;

  constructor() {
    this._template = HtmlTemplateService.getTemplate();
    this.setStyles();
  }

  async ngOnInit() {
    this._element = document.querySelector("#nodeToRenderAsPDF");
    const mainSelectorsWithData: MainSelector[] = CVData.getData();
    // console.log(StorageHelper.getItem(StorageKey.PersonalImage));
    const languages = <ILanguage[]>StorageHelper.getItem(StorageKey.Languages);
    const education = <IEducation[]>StorageHelper.getItem(StorageKey.Education);
    const skills = <ITagWithSkills[]>StorageHelper.getItem(StorageKey.Skills);

    const template = new Template(
      this._template,
      mainSelectorsWithData,
      new ListSelector("@languagesList", languages),
      new ListSelector("@educationList", education),
      new ListSelector("@skillsList", skills),
      new RemoveIfEmptySelector("@educationList", education),
      new RemoveIfEmptySelector("@languagesList", languages)
    );

    let content = document.querySelector("#nodeToRenderAsPDF");
    content.innerHTML = template.generate();
    let img = <HTMLImageElement>document.querySelector("#prev-img");
    img.src = StorageHelper.getItem(StorageKey.PersonalImage);

    // let ls = new ListSelector(lng);
    // ls.execute("");
    // console.log(Object.values(lng));
  }

  private setStyles() {
    let css = HtmlTemplateService.getStyles(),
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style");

    head.appendChild(style);
    style.appendChild(document.createTextNode(css));
  }

  download() {
    const filename = "CV.pdf";
    const quality = 4.5; //4.5
    // const element: HTMLElement = document.querySelector("#nodeToRenderAsPDF");

    html2canvas(this._element, {
      scale: quality,
    }).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4", true);

      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, width, height);

      pdf.save(filename);
      // pdf.autoPrint();
      // pdf.output("dataurlnewwindow");
    });
  }

  scroll(el: HTMLElement) {
    // el.scrollIntoView({ behavior: "smooth" });
    // this._element.classList.toggle("hide");
    el.classList.toggle("show");
  }

  alert() {
    alert("Work in progress.");
  }
}
