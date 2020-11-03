import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
// import { ApiAuthorizationModule } from "src/api-authorization/api-authorization.module";
// import { AuthorizeGuard } from "src/api-authorization/authorize.guard";
// import { AuthorizeInterceptor } from "src/api-authorization/authorize.interceptor";
import { EducationFormComponent } from "./Components/education-form/education-form.component";
import { DatePipe } from "@angular/common";
import { LanguagesFormComponent } from "./Components/languages-form/languages-form.component";
import { WorkExperienceFormComponent } from "./Components/work-experience-form/work-experience-form.component";
import { DateManager } from "../Models/DateManager";
import { ExperienceComponent } from "./Components/experience/experience.component";
import { CertificatesFormComponent } from "./Components/certificates-form/certificates-form.component";
import { StepMenuComponent } from "./Components/step-menu/step-menu.component";
import { PersonalDataComponent } from "./Components/personal-data/personal-data.component";
import { PersonalDataFormComponent } from "./Components/personal-data-form/personal-data-form.component";
import { ContactDataFormComponent } from "./Components/contact-data-form/contact-data-form.component";
import { AddressFormComponent } from "./Components/address-form/address-form.component";
import { ImageFormComponent } from "./Components/image-form/image-form.component";
import { SkillsComponent } from "./Components/skills/skills.component";
import { SkillsFormComponent } from "./Components/skills-form/skills-form.component";
import { HobbyFormComponent } from "./Components/hobby-form/hobby-form.component";
import { SummaryComponent } from "./Components/summary/summary.component";
import { CvPreviewComponent } from "./Components/cv-preview/cv-preview.component";
import { SocialMediaFormComponent } from "./Components/social-media-form/social-media-form.component";
import { DataProtectionFormComponent } from "./Components/data-protection-form/data-protection-form.component";
import { LoginComponent } from "./Components/login/login.component";
import { JwtModule } from "@auth0/angular-jwt";
import { CustomersComponent } from "./Components/customers/customers.component";
import { AuthGuard } from "./Guards/auth.guard";
import { RegisterComponent } from "./Components/register/register.component";
import { AdminGuard } from "./Guards/admin.guard";
import { AdminMenuComponent } from './Components/admin-menu/admin-menu.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EducationFormComponent,
    LanguagesFormComponent,
    WorkExperienceFormComponent,
    ExperienceComponent,
    CertificatesFormComponent,
    StepMenuComponent,
    PersonalDataComponent,
    PersonalDataFormComponent,
    ContactDataFormComponent,
    AddressFormComponent,
    ImageFormComponent,
    SkillsComponent,
    SkillsFormComponent,
    HobbyFormComponent,
    SummaryComponent,
    CvPreviewComponent,
    SocialMediaFormComponent,
    DataProtectionFormComponent,
    LoginComponent,
    CustomersComponent,
    RegisterComponent,
    AdminMenuComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "creator/experience", component: ExperienceComponent },
      { path: "creator/personalData", component: PersonalDataComponent },
      { path: "creator/skills", component: SkillsComponent },
      { path: "creator/summary", component: SummaryComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      {
        path: "customers",
        component: CustomersComponent,
        canActivate: [AdminGuard],
      },
    ]),

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    DatePipe,
    DateManager,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
