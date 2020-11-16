import { DateManager } from "./DateManager";
import { element } from "protractor";
import { ISocialMedia } from "./Interfaces/ISocialMedia";
import { ICertificate } from "./Interfaces/ICertificate";
import { CVData } from "./CVData";
import { IEducation } from "./Interfaces/IEducation";
import { IFunctionSelector } from "./Interfaces/IFunctionSelector";
import { ILanguage } from "./Interfaces/ILanguage";
import { ITagWithSkills } from "./Interfaces/ITagWithSkills";
import { ListSelector } from "./ListSelector";
import { MainSelector } from "./MainSelector";
import { RemoveIfEmptySelector } from "./RemoveIfEmptySelector";
import { StorageHelper } from "./StorageHelper";
import { StorageKey } from "./StorageKey";
import { TemplateGenerator } from "./TemplateGenerator";

export class ContentGenerator {
  private _dateManager: DateManager = new DateManager();

  prepareContent(template: string) {
    const mainSelectorsWithData: MainSelector[] = CVData.getData();
    const languages = <ILanguage[]>StorageHelper.getItem(StorageKey.Languages);
    const education = <IEducation[]>StorageHelper.getItem(StorageKey.Education);
    const skills = <ITagWithSkills[]>StorageHelper.getItem(StorageKey.Skills);
    const socialMedia = <ISocialMedia[]>(
      StorageHelper.getItem(StorageKey.SocialMedia)
    );

    //temp
    education.forEach((element) => {
      element.startDate = this._dateManager.transformDate(
        element.startDate,
        "MM/yyyy"
      );
      element.endDate = this._dateManager.transformDate(
        element.endDate,
        "MM/yyyy"
      );
    });

    const image = StorageHelper.getItem(StorageKey.PersonalImage);

    const functionSelectors: IFunctionSelector[] = [
      new ListSelector("@languagesList", languages),
      new ListSelector("@educationList", education),
      new ListSelector("@skillsList", skills),
      new ListSelector("@contactList", socialMedia),
      //   new ListSelector("@certificatesList", certificates),
      new RemoveIfEmptySelector("@educationList", education),
      new RemoveIfEmptySelector("@languagesList", languages),
      new RemoveIfEmptySelector("@skillsList", skills),
      new RemoveIfEmptySelector("@contactList", socialMedia),
      //   new RemoveIfEmptySelector("@certificatesList", certificates),
    ];

    const templateGenerator = new TemplateGenerator(
      template,
      mainSelectorsWithData,
      ...functionSelectors
    );

    templateGenerator.setValue("@image", image);

    return templateGenerator.generate();
  }
}
