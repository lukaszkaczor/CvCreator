import { Component, OnInit } from "@angular/core";
import { FormModel } from "../../../Models/FormModel";
import { StorageHelper } from "../../../Models/StorageHelper";
import { FormBuilder, Validators } from "@angular/forms";
import { ModelType } from "src/Models/Enums/ModelType";
import { StorageKey } from "../../../Models/StorageKey";
import { ITagWithSkills } from "../../../Models/Interfaces/ITagWithSkills";
import { ISkill } from "../../../Models/Interfaces/ISkill";

@Component({
  selector: "skills-form",
  templateUrl: "./skills-form.component.html",
  styleUrls: ["./skills-form.component.css"],
})
export class SkillsFormComponent extends FormModel implements OnInit {
  formIsInvalid = false;
  skillsList: ISkill[] = [];

  constructor(builder: FormBuilder) {
    super(new StorageHelper(StorageKey.Skills), ModelType.Array);
    this.index = -1;

    this.form = builder.group({
      tag: [""],
      skill: ["", Validators.required],
    });

    console.log(this.skillsList);
  }

  ngOnInit() {}

  addToSkillsList() {
    if (this.form.status === "INVALID") {
      this.formIsInvalid = true;
      return 0;
    }

    this.formIsInvalid = false;
    let skill: ISkill = { skill: this.skill.value };
    this.skillsList.push(skill);
    this.skill.reset();
    this.tag.disable();
  }

  onSubmit(event) {
    const item: ITagWithSkills = {
      tag: this.tag.value,
      skills: this.skillsList,
    };

    super.onSubmit(event, item);

    this.tag.enable();
    this.skillsList = [];
  }

  alert() {
    alert("coming soon");
  }

  get skill() {
    return this.form.get("skill");
  }

  get tag() {
    return this.form.get("tag");
  }
}
