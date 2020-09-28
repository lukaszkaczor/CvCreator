import { ISelector } from "./Interfaces/ISelector";
import { IFunctionSelector } from "./Interfaces/IFunctionSelector";

export class Template {
  private _template: string;
  private _selectors: ISelector[];
  private _functionSelectors: IFunctionSelector[];

  constructor(
    template: string,
    mainSelectors: ISelector[],
    ...functionSelectors: IFunctionSelector[]
  ) {
    this._template = template;
    this._selectors = mainSelectors;
    this._functionSelectors = functionSelectors;
  }

  public get template(): string {
    return this._template;
  }

  replaceAt(template: string, index: number, newText: string) {
    return [
      template.slice(0, index),
      newText + "@",
      template.slice(index),
    ].join("");
  }

  deleteSelectors(selector: string) {
    let reg = new RegExp(`@${selector}`, "g");

    return this._template.replace(reg, "");
  }

  private updateIndexes() {
    let indexes = [];
    this._selectors.forEach((element) => {
      indexes.push(element.getMainIndexes(this._template));
    });

    return indexes;
  }

  generate() {
    let indexes = this.updateIndexes();

    for (let i = 0; i < this._selectors.length; i++) {
      for (let j = 0; j < indexes[i].length; j++) {
        const index = this._selectors[i].getMainIndexes(this._template)[j];

        this._template = this.replaceAt(
          this._template,
          index,
          this._selectors[i].value
        );
      }
      this._template = this.deleteSelectors(this._selectors[i].name);
    }

    this._functionSelectors.forEach((element) => {
      this._template = element.execute(this._template);
    });

    return this._template;
  }
}
