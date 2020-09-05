export class DateManager {

    public isFutureDate(...dates: string[]): boolean {
        const today = new Date();

        for (let index in dates) {
            if (today < new Date(dates[index])) return true;
        }

        return false;
    }

    public startDateIsGreaterThanEndDate(startDate: Date, endDate: Date): boolean {
        if (startDate == null || endDate == null) return false;
        return new Date(startDate) > new Date(endDate)
    }
}