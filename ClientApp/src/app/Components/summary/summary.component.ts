import { Component, OnInit } from "@angular/core";

@Component({
  selector: "summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.css"],
})
export class SummaryComponent implements OnInit {
  element: HTMLElement;
  constructor() {}

  ngOnInit() {
    // this.element = document.querySelector("#box");
    // var tag = document.createElement("h1");
    // tag.className = "tej";
    // // tag.setAttribute("style", "color: blue");
    // let style = document.createElement("style");
    // style.type = "text/css";
    // // style.styleSheet.cssText = "h1{color: yellow}";
    // var text = document.createTextNode(
    //   "Tutorix is the best e-learning platform"
    // );
    // tag.appendChild(text);
    // this.element.appendChild(tag);
    // this.appendStyle("h1{color: yellow}");
    // this.tej();
  }

  appendStyle(content) {
    let style = document.createElement("STYLE");
    // style.type = "text/css";
    style.appendChild(document.createTextNode(content));
    document.head.appendChild(style);
  }

  tej() {
    var css = ".tej { background: green; }";

    const head = document.head || document.getElementsByTagName("head")[0];
    const style = <HTMLStyleElement>document.createElement("style");

    head.appendChild(style);

    // style.type = "text/css";
    // if (style.styleSheet) {
    // This is required for IE8 and below.
    // style.styleSheet.cssText = css;
    // style.styleSheet.cssText
    // } else {
    style.appendChild(document.createTextNode(css));
    // }
  }
}
