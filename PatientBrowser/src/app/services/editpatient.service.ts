import { Patient } from '../../models/patient';
import { Injectable } from '@angular/core';

@Injectable()
export class EditPatientService {
    patient: Patient;
    constructor() { }
}
