import { IFunctionSelector } from "./Interfaces/IFunctionSelector";
export class ListSelector implements IFunctionSelector {
  private _name: string;
  private _data: any[];

  constructor(name: string, list: any[]) {
    this._data = list;
    this._name = `@list="${name}"`;
  }

  execute(template: string) {
    let readyElements = [];
    const headerRegex = new RegExp(
      `<.*${this.name}.*[\\s\\S]*.*</ ${this.name}.*>`,
      "mg"
    );

    let mainElement = headerRegex.exec(template)[0];

    const contentRegex = new RegExp(">[\\s\\S]*<", "mg");
    let content = contentRegex.exec(mainElement)[0];
    content = content.slice(1, -1);

    for (let i = 0; i < this._data.length; i++) {
      let tempContent = content;
      let values = Object.values(this._data[i]);
      let keys = Object.keys(this._data[i]);

      for (let j = 0; j < values.length; j++) {
        const value = values[j];
        tempContent = tempContent.replace(`@${keys[j]}`, value.toString());
      }
      readyElements.push(tempContent);
    }

    return template.replace(headerRegex, readyElements.join(""));
  }

  public get name(): string {
    return this._name;
  }

  public get data(): any[] {
    return this._data;
  }
  public set data(v: any[]) {
    this._data = v;
  }
}
