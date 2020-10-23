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

    // console.log(this._data);
    let mainElement = headerRegex.exec(template)[0];

    const contentRegex = new RegExp(">[\\s\\S]*<", "mg");
    let content = contentRegex.exec(mainElement)[0];
    // console.log(content);
    content = content.slice(1, -1);

    // let tej: string = "";
    // let arra = [];
    // let skillRegex = new RegExp("<.*>@skill</.*>");
    // let skillContent = skillRegex.exec(content)[0];

    for (let i = 0; i < this._data.length; i++) {
      let tempContent = content;
      let values = Object.values(this._data[i]);
      let keys = Object.keys(this._data[i]);
      // console.log(Object.keys(values[1]));

      // console.log(values);

      for (let j = 0; j < values.length; j++) {
        const value = values[j];
        console.log(values);
        console.log(keys);

        if (Array.isArray(value))
          tempContent = this.innerList(value, tempContent);
        else tempContent = tempContent.replace(`@${keys[j]}`, value.toString());
      }
      readyElements.push(tempContent);
    }

    return template.replace(headerRegex, readyElements.join(""));
  }

  innerList(value, content) {
    console.log(content);
    let array = [];
    let skillRegex = new RegExp("<.*>@skill</.*>");
    let skillContent = skillRegex.exec(content)[0];
    let header = content.replace(skillContent, "");
    array.push(header);
    // console.log(value);
    for (let index = 0; index < value.length; index++) {
      const element = value[index];
      // console.log(skillContent);
      // let innerSkillContent = skillContent;
      let key = Object.keys(element);
      let val = Object.values(element);
      // innerSkillContent = innerSkillContent.replace(`@${key}`, val.toString());
      // readyElements.push(innerSkillContent);
      array.push(skillContent.replace(`@${key}`, val.toString()));
    }
    console.log(array);
    return array.join("");
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
