import { Component, OnInit } from '@angular/core';
import { Patient, PATIENTS } from '../../models/patient';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = PATIENTS;
  selectedPatient?: Patient;
  showAddPatientSection = false;
  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(value => {
        if (value) {
          const searchPhrase = value.toLowerCase();
          this.patients = PATIENTS.filter(patient => {
            return patient.name.toLowerCase().includes(searchPhrase) || patient.surname.includes(searchPhrase);
          });
        } else {
          this.patients = PATIENTS;
        }
      });
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
    this.patients.push(patient);
    this.showAddPatientSection = false;
  }
}
