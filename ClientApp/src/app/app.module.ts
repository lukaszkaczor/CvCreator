import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { EducationFormComponent } from './Components/education-form/education-form.component';
import { DatePipe } from '@angular/common';
import { LanguagesFormComponent } from './Components/languages-form/languages-form.component';
import { WorkExperienceFormComponent } from './Components/work-experience-form/work-experience-form.component';
import { DateManager } from '../Models/DateManager';
import { ExperienceComponent } from './Components/experience/experience.component';
import { CertificatesFormComponent } from './Components/certificates-form/certificates-form.component';
import { StepMenuComponent } from './Components/step-menu/step-menu.component';

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
    StepMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'experience', component: ExperienceComponent },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    DatePipe,
    DateManager,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
