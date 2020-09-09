export class WorkExperience {
    workplace: string;
    startDate: Date;
    endDate: Date;
    business: string;
    localization: string;
    stillWorking: boolean;
    description: string;

    constructor(workplace: string, startDate: Date, endDate: Date, business?: string,
        localization?: string, stillWorking?: boolean, description?: string) {
        this.workplace = workplace;
        this.startDate = startDate;
        this.endDate = endDate;
        this.business = business;
        this.localization = localization;
        this.stillWorking = stillWorking;
        this.description = description;
    }


    // public get endDate(): Date {
    //     return this._endDate;
    // }
    // public set endDate(v: Date) {
    //     this._endDate = v;
    // }

    // public get startDate(): Date {
    //     return this._startDate;
    // }
    // public set startDate(v: Date) {
    //     this._startDate = v;
    // }

    // public get workplace(): string {
    //     return this._workplace;
    // }
    // public set workplace(v: string) {
    //     this._workplace = v;
    // }

    // public get business(): string {
    //     return this._business;
    // }
    // public set business(v: string) {
    //     this._business = v;
    // }

    // public get localization(): string {
    //     return this._localization;
    // }
    // public set localization(v: string) {
    //     this._localization = v;
    // }

    // public get stillWorking(): boolean {
    //     return this._stillWorking;
    // }
    // public set stillWorking(v: boolean) {
    //     this._stillWorking = v;
    // }

    // public get description(): string {
    //     return this._description;
    // }
    // public set description(v: string) {
    //     this._description = v;
    // }

}