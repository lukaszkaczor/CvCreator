import { ISelector } from "./Interfaces/ISelector";
// import { FunctionSelector } from "./FunctionSelector";
export class MainSelector implements ISelector {
  private _name: string;
  private _value: string;

  constructor(name: string, value: string) {
    this.isValid(name)
      ? (this._name = name)
      : console.error("Selector name is invalid: " + name);

    this._name = name;
    this._value = value;
  }

  public getFunctionIndexes(template: string): number[] {
    const regex = new RegExp(`@.+=("|')(?:${this._name})("|')`, "g");
    let indexes = [];
    let match;

    while ((match = regex.exec(template)) != null) {
      const selector = match[0].substr(0, match[0].indexOf(`"`));
      indexes.push(match.index + selector.length + 1);
    }
    return indexes;
  }

  public getMainIndexes(template: string) {
    let mainIndexes = [];

    for (let index = 0; index < this.getAllIndexes(template).length; index++) {
      const element = this.getAllIndexes(template)[index];
      if (!this.getFunctionIndexes(template).includes(element))
        mainIndexes.push(element);
    }
    return mainIndexes;
  }

  private isValid(name: string): boolean {
    return name.match("^@[a-zA-Z]+$") != null;
  }

  private getAllIndexes(template: string) {
    const regex = new RegExp(`((?!@.*="))${this._name}`, "g");
    let indexes = [];
    let match;

    while ((match = regex.exec(template)) != null) indexes.push(match.index);

    return indexes;
  }

  public get name(): string {
    return this._name;
  }
  public get value(): string {
    return this._value;
  }
}
