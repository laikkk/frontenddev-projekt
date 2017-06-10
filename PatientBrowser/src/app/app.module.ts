import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PatientService } from './services/patients.service';
import { EditPatientService } from './services/editpatient.service';
import { ConfirmDeactivateGuard } from './guards/editing-leave.guard';

import { PatientListComponent } from 'app/components/list/subcomponents/patient-list/patient-list.component';
import { PatientFormComponent } from 'app/components/shared/patient-form/patient-form.component';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { ListComponent } from 'app/components/list/list.component';
import { SearchPatientComponent } from 'app/components/dashboard/subcomponents/search-patient/search-patient.component';
import { PatientPreviewComponent } from 'app/components/dashboard/subcomponents/patient-preview/patient-preview.component';

import { AppComponent } from './app.component';

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


