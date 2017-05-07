import { Component, OnInit } from '@angular/core';
import { Patient, PATIENTS } from '../../models/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = PATIENTS;
  selectedPatient?: Patient;
  constructor() { }
  ngOnInit() { }

  selected(patient: Patient) {
    this.selectedPatient = patient;
  }

  removeSelectedPatient(patient: Patient) {
    console.log(`Passing back patient ${patient.name + ' ' + patient.surname}`);
    this.selectedPatient = null;
  }
}
