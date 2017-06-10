import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from 'app/models/patient';

@Component({
  selector: 'app-patient-preview',
  templateUrl: './patient-preview.component.html',
  styleUrls: ['./patient-preview.component.css']
})
export class PatientPreviewComponent implements OnInit {
  @Input()
  patient: Patient;

  @Output()
  onHideButtonTapped = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  clearPreview() {
    this.patient = null;
    this.onHideButtonTapped.emit();
  }

}
