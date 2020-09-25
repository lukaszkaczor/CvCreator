import { IStorage } from "./Interfaces/IStorage";

export class StorageHelper implements IStorage {
  private _key: string;

  constructor(key: string) {
    this._key = key;
  }

  get() {
    return JSON.parse(localStorage.getItem(this._key));
  }

  set(value) {
    localStorage.setItem(this._key, JSON.stringify(value));
  }

  remove() {
    localStorage.removeItem(this._key);
  }

  static getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
