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
    // let s = this.replaceAt(template, list[1][0], "siema");
    // for (let i = 0; i < list.length; i++) {
    //   const element = list[i];
    //   console.log(element.selector);

    //   for (let j = 0; j < indexes[i].length; j++) {
    //     const element = sec[i][j];
    //     // console.log(element);
    //     template = this.replaceAt(template, element, list[i].value);
    //   }

    // }
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

  // mainSelectorIsValid(selector: string): boolean {
  //   return selector.match("^@[a-zA-Z]+$") != null;
  // }

  // selectorIsValid(selector: string) {
  //   return selector.match("^@.+='|\"@.+'|\"$") != null;
  // }

  // functionSelectorIndex(template: string, selector: string): number[] {
  //   // var match = /bar/.exec("foobar");
  //   const re = new RegExp(`@.+=("|')(?:${selector})("|')`, "g");
  //   let array = [];
  //   let match;

  //   while ((match = re.exec(template)) != null) {
  //     let tej = match[0].substr(0, match[0].indexOf(`"`));
  //     // console.log(tej);
  //     array.push(match.index + tej.length + 1);
  //   }

  //   return array;
  // }

  // mainSelectorIndex(template: string, selector: string) {
  //   // var match = /bar/.exec("foobar");
  //   const re = new RegExp(`((?!@.*="))${selector}`, "g");
  //   let array = [];
  //   let match;

  //   while ((match = re.exec(template)) != null) array.push(match.index);

  //   return array;
  // }

  // selectorValuesList(fList: number[], mList: number[]) {
  //   let array = [];

  //   for (let index = 0; index < mList.length; index++) {
  //     const element = mList[index];

  //     if (!fList.includes(element)) array.push(element);
  //   }

  //   return array;
  // }

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
