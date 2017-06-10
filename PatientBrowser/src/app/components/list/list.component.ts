import { Component, OnInit, Host, ViewChild } from '@angular/core';
import { PatientListComponent } from 'app/components/list/subcomponents/patient-list/patient-list.component';
import { EditPatientService } from 'app/services/editpatient.service';
import { PatientService } from 'app/services/patients.service';
import { Patient } from 'app/models/patient';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  showAddPatientComp = false;

  @ViewChild('patientList') patientListComponent: PatientListComponent;

  constructor(private editPatientService: EditPatientService, private patientService: PatientService) { }

  ngOnInit() { }

  updateAndRemoveEditPatientComp(patient: Patient) {
    this.patientService.update(patient).subscribe((updatedPatient) => {
      console.log('Patient Updated');
    }, (error) => {
      console.log('Error occurred when updating patient');
    });

    console.log('edit patient button clicked');
    this.editPatientService.patient = null;
  }

  showAddPatientComponent() {
    this.editPatientService.patient = null;
    this.showAddPatientComp = true;
  }

  hideAddPatientComponent() {
    this.showAddPatientComp = false;
  }

  removePatientToEditAndHideEditComponent() {
    this.editPatientService.patient = null;
  }

  addPatient(patient: Patient) {
    this.patientService.add(patient).subscribe((value) => {
      this.patientListComponent.fetchAllPatients();
    }, (error) => { console.log(`error occurred ${error}`); });
    console.log('add patient button clicked');
    this.showAddPatientComp = false;
  }

}
