import { WorkExperience } from './WorkExperience';
import { Education } from './Education';

export abstract class FixedForm {

    private _element;
    public objectList = [];
    public index: number;
    // // public objectList<T>(args: T): T {
    // //     return args;
    // // }


    constructor() {

    }

    onSubmit(item, event) {
        this.index == -1 ? this.objectList.push(item) : this.objectList[this.index] = item;

        this.hide(event);
        // this
    }



    public show(value: string = "flex"): void {
        this._element.style.display = value
    }

    public hide(event): void {
        event.preventDefault();
        this._element.style.display = "none";
    }

    public get element(): HTMLElement {
        return this._element;
    }

    public set element(v: HTMLElement) {
        this._element = v;
    }

}