import { Component, OnInit } from "@angular/core";
import { ImageManager } from "../../../Models/ImageManager";
import { StorageHelper } from "../../../Models/StorageHelper";
import { IStorage } from "../../../Models/Interfaces/IStorage";
import { StorageKey } from "../../../Models/StorageKey";

@Component({
  selector: "image-form",
  templateUrl: "./image-form.component.html",
  styleUrls: ["./image-form.component.css"],
})
export class ImageFormComponent implements OnInit {
  private _storageHelper: IStorage;
  private _preview: HTMLImageElement;
  public imgIsNull: boolean;

  public defaultImage = "../../assets/person placeholder.jpg";
  private file;

  constructor() {
    this._storageHelper = new StorageHelper(StorageKey.PersonalImage);
  }

  ngOnInit() {
    this._preview = document.querySelector("#imgPreview");

    this.imgIsNull = this._storageHelper.get() == null;

    this._preview.src = this.imgIsNull
      ? this.defaultImage
      : this._storageHelper.get();
  }

  async readFile() {
    this.file = (<HTMLInputElement>(
      document.querySelector("#fileInput")
    )).files[0];

    try {
      const encodedFile = await ImageManager.Encode(this.file);
      // preview.src = (file != undefined) ? await ImageManager.Encode(file) : preview.src;
      this.imgIsNull = false;
      this._preview.src = encodedFile;
      this._storageHelper.set(encodedFile);
    } catch (e) {
      console.log(e);
    }
  }

  public remove() {
    this._storageHelper.remove();
    this._preview.src = this.defaultImage;
    this.imgIsNull = true;
    // this.file.value = "";
  }
}
