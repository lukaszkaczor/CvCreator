import { IBasicData } from "./Interfaces/IBasicData";
import { MainSelector } from "./MainSelector";
import { StorageHelper } from "./StorageHelper";
import { StorageKey } from "./StorageKey";
import { IAddress } from "./Interfaces/IAddress";
import { IContact } from "./Interfaces/IContact";

export class CVData {
  static getData() {
    return [
      //   new MainSelector(
      //     "@image",
      //     StorageHelper.getItem(StorageKey.PersonalImage)
      //   ),

      new MainSelector(
        "@firstName",
        (<IBasicData>StorageHelper.getItem(StorageKey.PersonalData)).firstName
      ),

      new MainSelector(
        "@lastName",
        (<IBasicData>StorageHelper.getItem(StorageKey.PersonalData)).lastName
      ),

      new MainSelector(
        "@dateOfBirth",
        (<IBasicData>(
          StorageHelper.getItem(StorageKey.PersonalData)
        )).dateOfBirth.toString()
      ),

      new MainSelector(
        "@country",
        (<IAddress>StorageHelper.getItem(StorageKey.Address)).country
      ),
      new MainSelector(
        "@address",
        (<IAddress>StorageHelper.getItem(StorageKey.Address)).city
      ),
      new MainSelector(
        "@email",
        (<IContact>StorageHelper.getItem(StorageKey.Contact)).email
      ),
      new MainSelector(
        "@phoneNumber",
        (<IContact>StorageHelper.getItem(StorageKey.Contact)).phoneNumber
      ),
    ];
  }
}
