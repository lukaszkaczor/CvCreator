import { Component, OnInit, enableProdMode } from "@angular/core";
import { IWorkExperience } from "../../../Models/Interfaces/IWorkExperience";
import { IEducation } from "../../../Models/Interfaces/IEducation";
import { ILanguage } from "../../../Models/Interfaces/ILanguage";
import { ICertificate } from "../../../Models/Interfaces/ICertificate";
import { HtmlTemplateService } from "./html-template.service";
import { Template } from "../../../Models/Template";
import { MainSelector } from "../../../Models/MainSelector";
import { StorageHelper } from "../../../Models/StorageHelper";
import { StorageKey } from "../../../Models/StorageKey";
import { IAddress } from "../../../Models/Interfaces/IAddress";
import { IBasicData } from "../../../Models/Interfaces/IBasicData";
import { CVData } from "../../../Models/CVData";
import { ListSelector } from "../../../Models/ListSelector";
import { RemoveIfEmptySelector } from "../../../Models/RemoveIfEmptySelector";
import { ITagWithSkills } from "../../../Models/Interfaces/ITagWithSkills";

@Component({
  selector: "cv-preview",
  templateUrl: "./cv-preview.component.html",
  styleUrls: ["./cv-preview.component.css"],
})
export class CvPreviewComponent implements OnInit {
  private _template: string;

  constructor() {
    this._template = HtmlTemplateService.getTemplate();
    this.setStyles();
  }

  async ngOnInit() {
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
}
