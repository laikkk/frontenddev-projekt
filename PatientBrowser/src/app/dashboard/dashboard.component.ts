import { Patient } from './../../models/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  patient: Patient;
  constructor() { }

  ngOnInit() {
  }

  setPatient(patient: Patient) {
    console.log(patient);
    this.patient = patient;
  }

  logUserTapHideButton() {
    console.log('User tapped on hide button');
  }
}
