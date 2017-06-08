import { Component, OnInit } from '@angular/core';
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
  searchControl = new FormControl();
  patients: Patient[] = [];
  selectedPatient?: Patient;
  showAddPatientSection = false;

  constructor(private patientService: PatientService) {
    // this.patients = this.patientService.search(null);
    // this.searchControl.valueChanges
    //   .debounceTime(400)
    //   .distinctUntilChanged()
    //   .subscribe(value => { this.patients = this.patientService.search(value); });
  }

  ngOnInit() { }

  selected(patient: Patient) {
    this.selectedPatient = patient;
  }

  removeSelectedPatient(patient: Patient) {
    console.log(`Passing back patient: ${patient.name + ' ' + patient.surname}`);
    this.selectedPatient = null;
  }

  addPatient(patient: Patient) {
    console.log(`Added patient: ${patient.name + ' ' + patient.surname}`);
    // this.patientService.add(patient);
    this.showAddPatientSection = false;
  }
}
