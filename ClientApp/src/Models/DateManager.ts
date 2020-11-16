import { DatePipe } from "@angular/common";
export class DateManager {
  private _datePipe: DatePipe = new DatePipe("en-US");

  constructor() {
    // this._datePipe = datePipe;
  }

  public isFutureDate(...dates: string[]): boolean {
    const today = new Date();

    for (let index in dates) {
      if (today < new Date(dates[index])) return true;
    }

    return false;
  }

  public startDateIsGreaterThanEndDate(
    startDate: Date,
    endDate: Date
  ): boolean {
    if (startDate == null || endDate == null) return false;
    return new Date(startDate) > new Date(endDate);
  }

  public transformDate(date: Date | string, format: string = "yyyy-MM-dd") {
    try {
      return this._datePipe.transform(date, format);
    } catch (error) {
      return null;
    }
  }
}
