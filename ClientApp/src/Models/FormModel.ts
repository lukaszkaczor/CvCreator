import { FormGroup } from "@angular/forms";
import { IStorage } from "./Interfaces/IStorage";

export class FormModel {
    public form: FormGroup;
    public objectList = [];
    public index: number = -1;
    public resetFormAfterSubmit: boolean = true;

    private _storage: IStorage;

    constructor(storage: IStorage) {
        this._storage = storage;
        this.objectList = this._storage.get() ? this._storage.get() : [];
    }

    public onSubmit(event: Event, item: any) {
        this.index == -1 ? this.objectList.push(item) : this.objectList[this.index] = item;
        this._storage.set(this.objectList);
        if (this.resetFormAfterSubmit) this.form.reset();
    }

    public remove(index): void {
        this.objectList.splice(index, 1);
        this._storage.set(this.objectList);
    }
}