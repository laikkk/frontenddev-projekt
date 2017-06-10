import { ConfirmDeactivateGuard } from './guards/editing-leave.guard';
import { EditPatientService } from './services/editpatient.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PatientService } from './services/patients.service';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { PatientPreviewComponent } from './patient-preview/patient-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientFormComponent,
    DashboardComponent,
    ListComponent,
    SearchPatientComponent,
    PatientPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'list',
        component: ListComponent,
        canDeactivate: [ConfirmDeactivateGuard]
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    EditPatientService,
    PatientService,
    { provide: 'BASE_URL', useValue: 'http://localhost:3000' },
    ConfirmDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


