import { ListComponent } from './../list/list.component';
import { EditPatientService } from './../services/editpatient.service';
import { Component, OnInit, Host } from '@angular/core';
import { Patient } from '../../models/patient';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

import { PatientService } from '../services/patients.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];

  constructor(
    private patientService: PatientService,
    private editPatientService: EditPatientService) {
    this.fetchAllPatients();
  }

  ngOnInit() { }

  selected(patient: Patient) {
    console.log('selected patient to edit');
    this.editPatientService.patient = patient;
  }

  delete(patient: Patient) {
    this.patientService.delete(patient).subscribe((response) => {
      console.log(`Patient deleted. Response: ${response}`);
      this.fetchAllPatients();
    }, (error) => {
      console.log(`Problem occurred while deleting patient. Error: ${error}`);
    });
  }

  fetchAllPatients() {
    this.patientService.getAll().subscribe((patients) => { this.patients = patients; });
  }
}
