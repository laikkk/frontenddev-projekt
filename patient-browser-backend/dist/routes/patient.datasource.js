"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Patient {
    constructor(id, name, surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}
exports.Patient = Patient;
exports.PATIENTS = [
    { id: "1", name: 'Malina', surname: 'Kucharska' },
    { id: "2", name: 'Rafał ', surname: 'Majewski' },
    { id: "3", name: 'Wiola', surname: 'Nowicka' },
    { id: "4", name: 'Jadzia', surname: 'Kwiatkowska' },
    { id: "5", name: 'Zofia', surname: 'Chmielewska' }
];
class PatientDataSource {
    constructor() {
        this.patients = exports.PATIENTS;
    }
    get(patientId) {
        return this.patients.find(patient => patient.id === patientId);
    }
    getAll() {
        return this.patients;
    }
    add(patient) {
        this.patients.push(patient);
    }
    update(patient) {
        let patientIndex = this.patients.findIndex((pat) => {
            return pat.id === patient.id;
        });
        console.log(`patientIndex ${patientIndex}`);
        if (patientIndex >= 0) {
            this.patients[patientIndex] = patient;
            return true;
        }
        return false;
    }
    remove(patient) {
        this.patients = this.patients.filter(patient => {
            return patient.id !== patient.id;
        });
    }
}
exports.PatientDataSource = PatientDataSource;
