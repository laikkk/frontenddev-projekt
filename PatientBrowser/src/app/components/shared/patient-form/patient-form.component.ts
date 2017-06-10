import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Patient } from 'app/models/patient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  @Input() patient: Patient;
  @Input() header: string;
  @Output() onSubmitted: EventEmitter<Patient> = new EventEmitter();
  @Output() onCanceled: EventEmitter<Patient> = new EventEmitter();

  form: FormGroup;
  nameControl: AbstractControl;
  surnameControl: AbstractControl;
  imageURLControl: AbstractControl;

  constructor(formBuilder: FormBuilder) {
    if (this.patient == null) {
      this.patient = new Patient('', '', '', '');
    }

    this.form = formBuilder.group({
      'name': ['', Validators.required],
      'surname': ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)])
      ],
      'imageURL': ['', Validators.required],
    });

    this.nameControl = this.form.controls['name'];
    this.surnameControl = this.form.controls['surname'];
    this.imageURLControl = this.form.controls['imageURL'];
  }

  ngOnInit() { }

  onCancel(form: any) {
    this.onCanceled.emit(form);
  }

  onSubmit(values: any) {
    console.log(`Hello from onSubmit ${values.name} ${values.surname} `);
    this.patient.name = values.name;
    this.patient.surname = values.surname;
    this.patient.imageURL = values.imageURL;
    this.onSubmitted.emit(this.patient);
  }
}
