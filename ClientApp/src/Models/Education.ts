import { IEducation } from './Interfaces/IEducation';

export class Education implements IEducation {
    public StartDate: Date;
    public EndDate: Date;
    public StillStudying: boolean;
    public SchoolName: string;
    public Deegree: string;
    public Desctiption: string;
    public Specialization: string;
    public CourseOfStudy: string;

    constructor(start: Date, end: Date, isStudying: boolean, school: string, deg: string, desc: string, spec: string, course: string) {
        this.StartDate = start;
        this.EndDate = end;
        this.StillStudying = isStudying;
        this.SchoolName = school;
        this.Deegree = deg;
        this.Desctiption = desc;
        this.Specialization = spec;
        this.CourseOfStudy = course;
    }
}