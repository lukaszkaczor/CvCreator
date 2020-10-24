import { IFunctionSelector } from "./Interfaces/IFunctionSelector";

export class ListSelector implements IFunctionSelector {
  private _name: string;
  private _data: any[];

  constructor(name: string, list: any[]) {
    this._data = list;
    this._name = `@list="${name}"`;
  }

  execute(template: string) {
    let readyElements: string[] = [];
    const headerRegex = new RegExp(
      `<.*${this.name}.*[\\s\\S]*.*</ ${this.name}.*>`,
      "mg"
    );

    let mainElement = headerRegex.exec(template)[0];

    const contentRegex = new RegExp(">[\\s\\S]*<", "mg");
    let content = contentRegex.exec(mainElement)[0];

    content = content.slice(1, -1);

    readyElements.push(this.generateContent(this._data, content));

    return template.replace(headerRegex, readyElements.join(""));
  }

  private generateContent(data, content) {
    let readyElements = [];

    for (let i = 0; i < data.length; i++) {
      let tempContent = content;
      let values = Object.values(data[i]);
      let keys = Object.keys(data[i]);

      for (let j = 0; j < values.length; j++) {
        const value = values[j];

        if (Array.isArray(value))
          tempContent = this.generateContent(value, tempContent);
        else {
          tempContent = tempContent = tempContent.replace(
            `@${keys[j]}`,
            value.toString()
          );
        }
      }
      readyElements.push(tempContent);
    }

    readyElements = this.removeRepeatedElements(readyElements);

    return readyElements.join("");
  }

  private removeRepeatedElements(array: string[]) {
    const regex = new RegExp("<.*@nonRepeat>.*<.*>", "mg");
    let filteredArray = [];

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      let index = 0;

      filteredArray.push(
        element.replace(regex, (item) => (!index++ ? item : ""))
      );
    }

    return filteredArray;
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
