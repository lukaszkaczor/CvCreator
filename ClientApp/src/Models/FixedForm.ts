import { FormGroup } from '@angular/forms';
import { IStorage } from './Interfaces/IStorage';

export abstract class FixedForm {

    public form: FormGroup;
    public formSubmitted = false;
    public index: number;
    private _element: HTMLElement;
    private _storage: IStorage;

    public objectList = [];


    constructor(storage: IStorage) {
        this._storage = storage;
        this.objectList = this._storage.get() ? this._storage.get() : [];
    }

    public abstract edit(index);

    onSubmit(event: Event, item): void {
        this.formSubmitted = true;
        if (this.form.status === "INVALID") return null;

        this.formSubmitted = false;
        this.index == -1 ? this.objectList.push(item) : this.objectList[this.index] = item;

        this.hide(event);
        this.form.reset();
        this._storage.set(this.objectList);
    }

    public show(value: string = "flex"): void {
        this._element.style.display = value;
    }

    public hide(event: Event): void {
        event.preventDefault();
        this.form.reset();
        this._element.style.display = "none";
    }

    public remove(index): void {
        this.objectList.splice(index, 1);
        this._storage.set(this.objectList);
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