import { SaveCvFormComponent } from "./../save-cv-form/save-cv-form.component";
import { ContentGenerator } from "./../../../Models/ContentGenerator";
import { PdfGeneratorAction } from "./../../../Models/Enums/PdfGeneratorAction";
import { PdfGenerator } from "./../../../Models/PdfGenerator";
import { ITemplate } from "./../../../Models/Interfaces/ITemplate";
import { TemplateService } from "./../../Services/template.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { StorageHelper } from "../../../Models/StorageHelper";
import { StorageKey } from "../../../Models/StorageKey";

@Component({
  selector: "cv-preview",
  templateUrl: "./cv-preview.component.html",
  styleUrls: ["./cv-preview.component.css"],
})
export class CvPreviewComponent implements OnInit {
  private _nodeToRenderAsPDF: HTMLElement;
  private document__head: HTMLElement;
  private _dynamicStylesTag;

  public templates: ITemplate[];
  public selectedTemplate: ITemplate;
  public selectedId: number;

  private _generator: PdfGenerator;

  @ViewChild(SaveCvFormComponent, { static: true })
  saveCvFormComponent: SaveCvFormComponent;

  constructor(private templateService: TemplateService) {}

  async ngOnInit() {
    this.document__head =
      document.head || document.getElementsByTagName("head")[0];
    this._nodeToRenderAsPDF = document.querySelector("#nodeToRenderAsPDF");
    this._generator = new PdfGenerator(this._nodeToRenderAsPDF);

    this.templateService.getAll().subscribe((response) => {
      this.templates = response as ITemplate[];
      this.templates = this.templates.filter((template) => template.isActive);

      const lastChosenTemplateId = StorageHelper.getItem(
        StorageKey.LastChosenTemplate
      );

      this.selectedTemplate = lastChosenTemplateId
        ? this.templates.find((d) => d.id == lastChosenTemplateId)
        : this.templates[0];

      this.setTemplate();
    });
  }

  public async execute(action: PdfGeneratorAction) {
    window.scroll(0, 0); // must have, otherwise there will be white spaces on the cv
    this._generator.generate(action);
  }

  public selectTemplate(id: number) {
    this.setBorderToSelectedTemplate(id);
    this.selectedTemplate = this.templates.find((d) => d.id == id);
    StorageHelper.setItem(StorageKey.LastChosenTemplate, id);
    this.setTemplate();
  }

  public toggleCvPreview(el: HTMLElement) {
    el.classList.toggle("show");
  }

  private prepareContent() {
    const content = new ContentGenerator();
    this._nodeToRenderAsPDF.innerHTML = content.prepareContent(
      this.selectedTemplate.html
    );
  }

  private setTemplate() {
    this.selectedId = this.selectedTemplate.id;
    this.prepareContent();
    this.setStyles(this.selectedTemplate.styles);
    this.saveCvFormComponent.html = this.selectedTemplate.html;
    this.saveCvFormComponent.styles = this.selectedTemplate.styles;
  }

  private setStyles(styles: string) {
    // if dynamic styles tag already exists
    if (this._dynamicStylesTag)
      this.document__head.removeChild(this._dynamicStylesTag);

    this._dynamicStylesTag = document.createElement("style");
    this.document__head.appendChild(this._dynamicStylesTag);
    this._dynamicStylesTag.appendChild(document.createTextNode(styles));
  }

  private setBorderToSelectedTemplate(id: number) {
    const boxes = <NodeListOf<HTMLElement>>(
      document.querySelectorAll(".template-box")
    );

    boxes.forEach((box) => {
      box.classList.remove("border--active");
    });

    const index = this.templates.findIndex((d) => d.id == id);
    boxes[index].classList.add("border--active");
  }

  alert(i) {
    alert("Work in progress." + i);
  }
}
