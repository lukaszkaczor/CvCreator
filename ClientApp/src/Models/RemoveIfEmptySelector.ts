import { listLazyRoutes } from "@angular/compiler/src/aot/lazy_routes";
import { IFunctionSelector } from "./Interfaces/IFunctionSelector";

export class RemoveIfEmptySelector implements IFunctionSelector {
  private _name: string;
  private _list = [];

  constructor(name: string, list: any[]) {
    this._name = `@removeIfEmpty="${name}"`;
    this._list = list;
  }

  execute(template: string) {
    // const regex = new RegExp(`<.*${this._name}.*<\/.*>`, "gm");
    const regex = new RegExp(
      `<.*${this._name}.*[\s\S]*<\/.*${this._name}.*>`,
      "gm"
    );

    return this._list.length === 0 ? template.replace(regex, "") : template;
  }

  public get name(): string {
    return this._name;
  }
}
