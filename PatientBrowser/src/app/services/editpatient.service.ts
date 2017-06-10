import { Injectable } from '@angular/core';
import { Patient } from 'app/models/patient';

@Injectable()
export class EditPatientService {
    patient: Patient;
    constructor() { }
}
