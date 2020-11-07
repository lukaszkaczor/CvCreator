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
  prepareContent(template: string) {
    const mainSelectorsWithData: MainSelector[] = CVData.getData();
    const languages = <ILanguage[]>StorageHelper.getItem(StorageKey.Languages);
    const education = <IEducation[]>StorageHelper.getItem(StorageKey.Education);
    const skills = <ITagWithSkills[]>StorageHelper.getItem(StorageKey.Skills);
    // const certificates = <ICertificate[]>(
    //   StorageHelper.getItem(StorageKey.Certificates)
    // );
    const image = StorageHelper.getItem(StorageKey.PersonalImage);

    const functionSelectors: IFunctionSelector[] = [
      new ListSelector("@languagesList", languages),
      new ListSelector("@educationList", education),
      new ListSelector("@skillsList", skills),
      //   new ListSelector("@certificatesList", certificates),
      new RemoveIfEmptySelector("@educationList", education),
      new RemoveIfEmptySelector("@languagesList", languages),
      new RemoveIfEmptySelector("@skillsList", skills),
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
