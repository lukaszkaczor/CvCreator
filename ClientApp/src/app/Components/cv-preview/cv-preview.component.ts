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
import { IBasicData } from "../../../Models/Interfaces/IBasicData";
import { IFunctionSelector } from "../../../Models/Interfaces/IFunctionSelector";
import { map } from "rxjs/operators";

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

    // (?<=\s)[^ ]*\s*\{[^\}]+\:[^\}]+\} css filter regex
    // let text = `
    // *{
    // color: red;
    // }

    // div{
    // backgorund: blue;
    // color: red;
    // }

    // `;
    // let regex = new RegExp(`(?<=\\s)[^ ]*\\s*\\{[^\\}]+\\:[^\\}]+\\}`, "gm");
    // console.log(regex.exec(text));
    // console.log(text.match(regex));

    await this.prepareContent();
  }

  private setStyles() {
    let css = HtmlTemplateService.getStyles(),
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style");

    head.appendChild(style);
    style.appendChild(document.createTextNode(css));
  }

  public async execute(action: boolean) {
    window.scroll(0, 0); // must have, otherwise there will be white spaces on the cv

    const quality = 4.5; // max safe value - 4.5
    const person: IBasicData = StorageHelper.getItem(StorageKey.PersonalData);
    const filename = this.setFilename(person);

    await html2canvas(this._element, { scale: quality }).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4", true);
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, width, height);

      // action ? download : print
      if (action) pdf.save(filename);
      else {
        pdf.autoPrint();
        pdf.output("dataurlnewwindow");
      }
    });
  }

  private prepareContent() {
    const mainSelectorsWithData: MainSelector[] = CVData.getData();
    const languages = <ILanguage[]>StorageHelper.getItem(StorageKey.Languages);
    const education = <IEducation[]>StorageHelper.getItem(StorageKey.Education);
    const skills = <ITagWithSkills[]>StorageHelper.getItem(StorageKey.Skills);

    console.log(skills);

    const functionSelectors: IFunctionSelector[] = [
      new ListSelector("@languagesList", languages),
      new ListSelector("@educationList", education),
      new ListSelector("@skillsList", skills),
      new RemoveIfEmptySelector("@educationList", education),
      new RemoveIfEmptySelector("@languagesList", languages),
    ];

    const template = new Template(
      this._template,
      mainSelectorsWithData,
      ...functionSelectors
    );

    // let content = document.querySelector("#nodeToRenderAsPDF");
    this._element.innerHTML = template.generate();
    let img = <HTMLImageElement>document.querySelector("#prev-img");
    img.src = StorageHelper.getItem(StorageKey.PersonalImage);
  }

  private setFilename(person: IBasicData) {
    return person == null || person.firstName == null || person.lastName == null
      ? "Curriculum vitae.pdf"
      : `${person.firstName} ${person.lastName} CV.pdf`;
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
