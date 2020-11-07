import { element } from "protractor";
import { PdfGeneratorAction } from "./Enums/PdfGeneratorAction";
import { PersonalDataFormComponent } from "./../app/Components/personal-data-form/personal-data-form.component";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { IBasicData } from "./Interfaces/IBasicData";
import { StorageHelper } from "./StorageHelper";
import { StorageKey } from "./StorageKey";

export class PdfGenerator {
  private _element: HTMLElement;

  public get element(): HTMLElement {
    return this._element;
  }

  constructor(element: HTMLElement) {
    this._element = element;
  }

  async generate(action: PdfGeneratorAction) {
    const quality = 4.5; // max safe value - 4.5
    const person: IBasicData = StorageHelper.getItem(StorageKey.PersonalData);
    const filename = this.setFileName(person);

    await html2canvas(this._element, { scale: quality }).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4", true);
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, width, height);

      switch (action) {
        case PdfGeneratorAction.Download:
          pdf.save(filename);
          break;

        case PdfGeneratorAction.Print:
          pdf.autoPrint();
          pdf.output("dataurlnewwindow");
          break;

        default:
          console.error(`Wrong PdfGeneratorAction value (${action})`);
          break;
      }
    });
  }

  private setFileName(person: IBasicData) {
    return person == null || person.firstName == null || person.lastName == null
      ? "Curriculum vitae.pdf"
      : `${person.firstName} ${person.lastName} CV.pdf`;
  }
}
