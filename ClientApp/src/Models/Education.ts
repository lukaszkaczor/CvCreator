import { IEducation } from './Interfaces/IEducation';

export class Education {
    public startDate: Date;
    public endDate: Date;
    public stillStudying: boolean;
    public schoolName: string;
    public degree: string;
    public description: string;
    public specialization: string;
    public courseOfStudy: string;


    // private _schoolName: string;
    // private _courseOfStudy: string;
    // private _specialization: string;
    // private _degree: string;
    // private _startDate: Date;
    // private _endDate: Date;
    // private _stillStudying: boolean;
    // private _description: string;




    constructor(schoolName: string, degree: string, startDate: Date, endDate: Date, stillStudying?: boolean, courseOfStudy?: string, specialization?: string, description?: string) {
        this.schoolName = schoolName;
        this.degree = degree;
        this.startDate = startDate;
        this.endDate = endDate;
        this.stillStudying = stillStudying;
        this.courseOfStudy = courseOfStudy;
        this.specialization = specialization;
        this.description = description;
    }
    // constructor(schoolName: string, degree: string, startDate: Date, endDate: Date, stillStudying?: boolean, courseOfStudy?: string, specialization?: string, description?: string) {
    //     this.schoolName = schoolName;
    //     this.degree = degree;
    //     this.startDate = startDate;
    //     this.endDate = endDate;
    //     this.stillStudying = stillStudying;
    //     this.courseOfStudy = courseOfStudy;
    //     this.specialization = specialization;
    //     this.description = description;
    // }


    // public get startDate(): Date {
    //     return this._startDate;
    // }
    // public set startDate(v: Date) {
    //     this._startDate = v;
    // }

    // public get endDate(): Date {
    //     return this._endDate;
    // }
    // public set endDate(v: Date) {
    //     this._endDate = v;
    // }

    // public get stillStudying(): boolean {
    //     return this._stillStudying;
    // }
    // public set stillStudying(v: boolean) {
    //     this._stillStudying = v;
    // }

    // public get schoolName(): string {
    //     return this._schoolName;
    // }
    // public set schoolName(v: string) {
    //     this._schoolName = v;
    // }

    // public get degree(): string {
    //     return this._degree;
    // }
    // public set degree(v: string) {
    //     this._degree = v;
    // }

    // public get description(): string {
    //     return this._description;
    // }
    // public set description(v: string) {
    //     this._description = v;
    // }

    // public get specialization(): string {
    //     return this._specialization;
    // }
    // public set specialization(v: string) {
    //     this._specialization = v;
    // }

    // public get courseOfStudy(): string {
    //     return this._courseOfStudy;
    // }
    // public set courseOfStudy(v: string) {
    //     this._courseOfStudy = v;
    // }
}