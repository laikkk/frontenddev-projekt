"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Patient {
    constructor(id, name, surname, imageURL) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.imageURL = imageURL;
    }
}
exports.Patient = Patient;
exports.PATIENTS = [
    { id: "1", name: 'Malina', surname: 'Kucharska', imageURL: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: "2", name: 'Rafał ', surname: 'Majewski', imageURL: 'https://randomuser.me/api/portraits/men/46.jpg' },
    { id: "3", name: 'Robert', surname: 'Kowalski', imageURL: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: "4", name: 'Jadzia', surname: 'Kwiatkowska', imageURL: 'https://randomuser.me/api/portraits/women/79.jpg' },
    { id: "5", name: 'Zofia', surname: 'Chmielewska', imageURL: 'https://randomuser.me/api/portraits/women/68.jpg' }
];
class PatientDataSource {
    constructor() {
        this.patients = exports.PATIENTS;
    }
    query(phrase) {
        phrase = phrase.toLocaleLowerCase();
        return this.patients.filter((patient) => {
            return patient.name.toLowerCase().indexOf(phrase) >= 0 || patient.surname.toLowerCase().indexOf(phrase) >= 0;
        });
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
        console.log(patient);
        this.patients = this.patients.filter(pat => {
            return pat.id != patient.id;
        });
    }
}
exports.PatientDataSource = PatientDataSource;
