import { FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Patient } from 'app/models/patient';
import { PatientService } from 'app/services/patients.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {
  searchField: FormControl = new FormControl();
  @Output() onSelectPatient = new EventEmitter<Patient>();
  selectedRow: number;
  selectedPatient: Patient;
  patients: Patient[];

  constructor(private patientService: PatientService) {
    this.searchField.valueChanges
      .debounceTime(1000)
      .subscribe((inputText) => {
        this.patientService.search(inputText).subscribe((patients) => { this.patients = patients; });
      });
  }

  ngOnInit() { }

  setClickedRow(patient: Patient, index: number) {
    this.selectedPatient = patient;
    this.onSelectPatient.emit(this.selectedPatient);
    this.selectedRow = index;
  }

  searchPatients(text: string) {
    this.selectedRow = undefined;
    this.selectedPatient = undefined;
    this.onSelectPatient.emit(undefined);

    this.patientService.search(text).subscribe((patients) => {
      this.patients = patients;
    });
  }

  searchButtonTapped() {
    this.searchPatients(this.searchField.value);
  }
}
