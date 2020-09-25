import { FormGroup } from "@angular/forms";
import { IStorage } from "./Interfaces/IStorage";
import { FormModel } from "./FormModel";
import { ModelType } from "./Enums/ModelType";

export abstract class FixedFormModel extends FormModel {
  public formSubmitted = false;
  private _element: HTMLElement;

  constructor(storage: IStorage, formModel: ModelType) {
    super(storage, formModel);
  }

  public abstract edit(index);

  onSubmit(event: Event, item): void {
    this.formSubmitted = true;
    if (this.form.status === "INVALID") return null;

    this.formSubmitted = false;
    super.onSubmit(event, item);
    this.hide(event);
  }

  public show(value: string = "flex"): void {
    this._element.style.display = value;
  }

  public hide(event: Event): void {
    event.preventDefault();
    this.form.reset();
    this._element.style.display = "none";
  }

  public add(): void {
    this.index = -1;
    this.show();
  }

  public get element(): HTMLElement {
    return this._element;
  }

  public set element(v: HTMLElement) {
    this._element = v;
  }
}
