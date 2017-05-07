import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {
  @Input() patient: Patient;
  @Output() onOkButtonClicked: EventEmitter<Patient> = new EventEmitter();
  constructor() { }
  ngOnInit() { }

  okClicked() {
    this.onOkButtonClicked.emit(this.patient);
  }
}
