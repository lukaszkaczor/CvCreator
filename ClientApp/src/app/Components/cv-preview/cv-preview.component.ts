import { Component, OnInit, enableProdMode } from "@angular/core";
import { IWorkExperience } from "../../../Models/Interfaces/IWorkExperience";
import { IEducation } from "../../../Models/Interfaces/IEducation";
import { ILanguage } from "../../../Models/Interfaces/ILanguage";
import { ICertificate } from "../../../Models/Interfaces/ICertificate";
import { IBasicData } from "../../../Models/Interfaces/IBasicData";
import { StorageHelper } from "../../../Models/StorageHelper";
import { StorageKey } from "../../../Models/StorageKey";
import { HtmlGenerator } from "../../../Models/HtmlGenerator";
import { HtmlTemplateService } from "./html-template.service";
import { Template } from "../../../Models/Template";
import { MainSelector } from "../../../Models/MainSelector";

@Component({
  selector: "cv-preview",
  templateUrl: "./cv-preview.component.html",
  styleUrls: ["./cv-preview.component.css"],
})
export class CvPreviewComponent implements OnInit {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  phoneNumber: string;
  email: string;
  workExperience: IWorkExperience[];
  education: IEducation[];
  languages: ILanguage[];
  certificates: ICertificate[];
  skills: string[];
  hobby: string;

  firstNameElement: HTMLElement;
  lastNameElement: HTMLElement;
  dateOfBirthElement: HTMLElement;
  addressElement: HTMLElement;
  phoneNumberElement: HTMLElement;
  emailElement: HTMLElement;
  workExperienceElement: HTMLElement;
  educationElement: HTMLElement;
  languagesElement: HTMLElement;
  certificatesElement: HTMLElement;
  skillsElement: HTMLElement;
  hobbyElement: HTMLElement;

  private _template: string;

  constructor() {
    this._template = HtmlTemplateService.getTemplate();
  }

  async ngOnInit() {
    let list: MainSelector[] = [
      new MainSelector("@address", "aValue"),
      new MainSelector("@takjest", "tvalue"),
    ];

    let template = new Template(this._template, ...list);

    template.generate();
    // let template = new Template(this._template, nameSelector, functionSelector);

    // template.getFreeIndexes();
    // template
    // let ns = new NameSelectorBase('')

    // let sm = new SelectorManager();

    // let s = g.functionSelectorIndex(this._template, "@address");
    // sm.getFunctionSelectorIndex(this._template, "@address");

    // let d = g.mainSelectorIndex(this._template, "@address");

    // let sv = g.selectorValuesList(s, d);

    // g.generate(this._template, ...array);
  }

  private elementExists(element: HTMLElement): boolean {
    return element != null;
  }

  private setData(...model: IModel[]) {
    model.forEach((item) => {
      if (this.elementExists(item.element)) item.element.innerHTML = item.value;
    });
  }
}

interface IModel {
  element: HTMLElement;
  value: string;
}
