import { Component, OnInit } from '@angular/core';
import { ImageManager } from '../../Models/ImageManager';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  value: number = 0;

  constructor() { }

  ngOnInit() {
  }

  transform() {
    const form = document.querySelector("form");

    this.value = (this.value >= 200) ? 0 : this.value += 100;

    form.style.transform = `translate(-${this.value}vw)`;
  }


  async readFile() {
    const preview = <HTMLImageElement>document.querySelector('#imgPreview');
    const file = (<HTMLInputElement>document.querySelector('#fileInput')).files[0];
    // const file = (<HTMLInputElement>document.querySelector('input[type=file]')).files[0];

    console.log(file);

    preview.src = (file != undefined) ? await ImageManager.Encode(file) : preview.src;


  }
}
