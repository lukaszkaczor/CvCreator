import { WorkExperience } from './WorkExperience';
import { Education } from './Education';
import { FormGroup } from '@angular/forms';

export abstract class FixedForm {

    public form: FormGroup;
    public formSubmitted = false;
    public index: number;
    private _element: HTMLElement;

    public objectList = [];

    constructor() {

    }

    public abstract edit(index);

    onSubmit(event: Event, item): void {
        this.formSubmitted = true;
        if (this.form.status === "INVALID") return null;

        this.formSubmitted = false;
        this.index == -1 ? this.objectList.push(item) : this.objectList[this.index] = item;

        this.hide(event);
        this.form.reset();
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
        this.objectList.splice(index, 1)
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