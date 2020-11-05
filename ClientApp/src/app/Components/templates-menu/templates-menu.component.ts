import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { TemplateService } from "src/app/Services/template.service";
import { ModelType } from "src/Models/Enums/ModelType";
import { FixedFormModel } from "src/Models/FixedFormModel";
import { ITemplate } from "src/Models/Interfaces/ITemplate";

@Component({
  selector: "app-templates-menu",
  templateUrl: "./templates-menu.component.html",
  styleUrls: ["./templates-menu.component.css"],
})
export class TemplatesMenuComponent extends FixedFormModel implements OnInit {
  templates: ITemplate[] = [];
  actionType = true; // actionType ? create : edit

  constructor(private templateService: TemplateService, builder: FormBuilder) {
    super(null, ModelType.Array);

    this.form = builder.group({
      id: [""],
      name: ["", Validators.required],
      isActive: [false],
      imageUrl: [""],
      html: ["", Validators.required],
      styles: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.element = <HTMLElement>document.querySelector("#templatesForm");

    this.templateService.getAll().subscribe((result) => {
      this.templates = result as ITemplate[];
    });
  }

  onSubmit(event) {
    this.formSubmitted = true;
    if (this.form.invalid) return 0;

    const template: ITemplate = {
      name: this.name.value,
      imageUrl: this.imageUrl.value,
      html: this.html.value,
      styles: this.styles.value,
      isActive: this.isActive.value ? this.isActive.value : false,
    };
    console.log(template);

    if (this.actionType) {
      // create
      this.templateService.post(template).subscribe(
        (result) => {
          this.templates.push(result as ITemplate);
          this.hide(event);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      //edit
      template.id = this.id.value;

      this.templateService.put(template.id, template).subscribe(
        (result) => {
          const index = this.templates.findIndex((d) => d.id == template.id);
          this.templates[index] = result as ITemplate;
          this.hide(event);
        },
        (error) => console.log(error)
      );
    }
  }

  public edit(id: any) {
    this.actionType = false;
    const template = this.templates.find((d) => d.id == id);
    // const template = this.templates[index];
    console.log(template);

    this.id.setValue(template.id);
    this.name.setValue(template.name);
    this.imageUrl.setValue(template.imageUrl);
    this.styles.setValue(template.styles);
    this.html.setValue(template.html);
    this.isActive.setValue(template.isActive);

    this.show();
  }

  public create() {
    this.actionType = true;
    this.add();
  }

  public remove(id: number) {
    this.templateService.delete(id).subscribe(
      (response) => {
        let index = this.templates.findIndex((d) => d.id == id);
        this.templates.splice(index, 1);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get id() {
    return this.form.get("id");
  }

  set id(val) {
    this.id.setValue(val);
  }

  get isActive() {
    return this.form.get("isActive");
  }

  set isActive(val) {
    this.isActive.setValue(val);
  }

  get name() {
    return this.form.get("name");
  }
  set name(val) {
    this.name.setValue(val);
  }

  get imageUrl() {
    return this.form.get("imageUrl");
  }
  set imageUrl(val) {
    this.imageUrl.setValue(val);
  }

  get html() {
    return this.form.get("html");
  }
  set html(val) {
    this.html.setValue(val);
  }

  get styles() {
    return this.form.get("styles");
  }
  set styles(val) {
    this.styles.setValue(val);
  }
}
