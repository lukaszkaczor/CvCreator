import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { InputFormComponent } from './input-form/input-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { DatePipe } from '@angular/common';
import { LanguagesFormComponent } from './languages-form/languages-form.component';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { DateManager } from '../Models/DateManager';
import { DataService } from './input-form/data.service';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceComponent } from './Components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    InputFormComponent,
    EducationFormComponent,
    LanguagesFormComponent,
    ExperienceFormComponent,
    ExperienceListComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'create', component: InputFormComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    DatePipe,
    DateManager,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
