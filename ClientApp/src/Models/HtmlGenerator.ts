// import { SelectorValues } from "./Interfaces/SelectorValues";
// import { SelectorValues } from "src/Models/Interfaces/SelectorValues";

export class HtmlGenerator {
  replaceAt(template: string, index: number, newText: string) {
    return [
      template.slice(0, index),
      newText + "@",
      template.slice(index),
    ].join("");
    // return (
    //   template.substring(0, index) + newText + template.substring(index + 1)
    // );
  }

  deleteSelectors(template: string, selector: string) {
    let reg = new RegExp(`@${selector}`, "g");

    return template.replace(reg, "");
    // return template.replace(`@${selector}`, "");
  }

  getIndexes(template: string, ...list: SelectorValues[]) {
    let indexes = [];
    list.forEach((element) => {
      indexes
        .push
        // this.selectorValuesList(
        //   // this.functionSelectorIndex(template, element.selector),
        //   // this.mainSelectorIndex(template, element.selector)
        // )
        ();
    });
    return indexes;
  }

  generate(template: string, ...list: SelectorValues[]) {
    let indexes = this.getIndexes(template, ...list);

    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      console.log(element.selector);

      for (let j = 0; j < indexes[i].length; j++) {
        const element = this.getIndexes(template, ...list)[i][j];
        // console.log(element);
        template = this.replaceAt(template, element, list[i].value);
      }
      template = this.deleteSelectors(template, list[i].selector);
    }

    console.log(template);
    console.log("--------------");

    // list.forEach((element) => {

    //   template = this.gl(template, element.selector, element.value);
    // });
  }

  isSelector(item: string): boolean {
    let selectors = this.getSelectors();
    let pattern = `^@(?:${item.substring(1, item.indexOf("="))})="|'@.+"|'`;

    for (let i = 0; i < selectors.length; i++) {
      if (selectors[i].match(pattern) != null) return true;
    }
    return false;
  }

  getSelectors(): string[] {
    return ['@hideIfNull="@value"', '@inyn="@value"'];
  }

  gll(template: string, ...list: SelectorValues[]) {
    list.forEach((element) => {
      template = this.gl(template, element.selector, element.value);
    });

    return template;
  }

  gl(template: string, selector: string, value: string) {
    return (template = template.replace(selector, value));
  }
}

export interface SelectorValues {
  selector: string;
  value: string;
}
