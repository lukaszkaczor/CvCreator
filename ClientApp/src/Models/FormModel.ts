import { FormGroup } from "@angular/forms";
import { IStorage } from "./Interfaces/IStorage";
import { ModelType } from "./Enums/ModelType";

export class FormModel {
  public form: FormGroup;
  public data;
  public index: number = -1;
  public resetFormAfterSubmit: boolean = true;

  private _modelType: ModelType;
  private _storage: IStorage;

  constructor(storage: IStorage, modelType?: ModelType) {
    this._storage = storage;
    this._modelType = modelType;
    this.data = modelType == ModelType.Array ? [] : null;

    if (this._storage && this._storage.get() != null)
      this.data = this._storage.get();
  }

  public onSubmit(event: Event, item: any) {
    switch (this._modelType) {
      case ModelType.Array:
        this.index == -1
          ? this.data.push(item)
          : (this.data[this.index] = item);
        break;

      case ModelType.Object:
      default:
        this.data = item;
        break;
    }

    // if (this._modelType == ModelType.Array) {
    // } else if (this._modelType == ModelType.Object) {
    //   this.objectList = item;
    // }
    if (this._storage) this._storage.set(this.data);
    if (this.resetFormAfterSubmit) this.form.reset();
  }

  public remove(index): void {
    this.data.splice(index, 1);
    this._storage.set(this.data);
  }
}
