import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {
  @Input() patientToEdit: Patient;
  @Output() onOkButtonClicked: EventEmitter<Patient> = new EventEmitter();

  constructor() {
  }

  ngOnInit() { }

  passToMsgToParent(value: any) {
    console.log(value);
    this.onOkButtonClicked.emit(this.patientToEdit);
  }
}
