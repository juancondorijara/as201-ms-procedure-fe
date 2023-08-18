import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullnamePersonPipe } from './pipes/fullname-person.pipe';
import { FullnameStudentPipe } from './pipes/fullname-student.pipe';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PersonFormComponent } from './components/forms/person-form/person-form.component';
import { PersonTableComponent } from './components/tables/person-table/person-table.component';
import { NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbModule, NgbTooltipModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbOffcanvasModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbToastModule, NgbRatingModule, NgbAccordionModule, NgbTimepickerModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonPageComponent } from './pages/person-page/person-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CareerPageComponent } from './pages/career-page/career-page.component';
import { StudentFormComponent } from './components/forms/student-form/student-form.component';
import { StudentTableComponent } from './components/tables/student-table/student-table.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StatusBoolPipe } from './pipes/status-bool.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ToastsComponent } from './components/toasts/toasts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProcedureTableComponent } from './components/tables/procedure-table/procedure-table.component';
import { ProcedurePageComponent } from './pages/procedure-page/procedure-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FullnamePersonPipe,
    FullnameStudentPipe,
    HomePageComponent,
    PersonFormComponent,
    PersonPageComponent,
    StudentPageComponent,
    NotFoundPageComponent,
    CareerPageComponent,
    StudentFormComponent,
    StudentTableComponent,
    LoginFormComponent,
    PersonTableComponent,
    LoginPageComponent,
    StatusBoolPipe,
    FilterPipe,
    ToastsComponent,
    DashboardComponent,
    ProcedureTableComponent,
    ProcedurePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Ng-Bootstrap
    NgbModule,
    NgbTypeaheadModule,
    NgbAlertModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbNavModule,
    NgbOffcanvasModule,
    NgbPaginationModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    NgbToastModule,
    NgbRatingModule,
    NgbAccordionModule,
    NgbTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
