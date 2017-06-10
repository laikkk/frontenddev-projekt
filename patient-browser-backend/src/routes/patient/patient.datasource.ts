
export class Patient {
    constructor(public id: string, public name: string, public surname: string, public imageURL: string) { }
}

export const PATIENTS: Patient[] = [
    { id: "1", name: 'Malina', surname: 'Kucharska', imageURL: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: "2", name: 'Rafał ', surname: 'Majewski', imageURL: 'https://randomuser.me/api/portraits/men/46.jpg' },
    { id: "3", name: 'Robert', surname: 'Kowalski', imageURL: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: "4", name: 'Jadzia', surname: 'Kwiatkowska', imageURL: 'https://randomuser.me/api/portraits/women/79.jpg' },
    { id: "5", name: 'Zofia', surname: 'Chmielewska', imageURL: 'https://randomuser.me/api/portraits/women/68.jpg' }
];

export class PatientDataSource {
    patients: Patient[] = PATIENTS;
    constructor() { }

    query(phrase: string): Patient[] {
        phrase = phrase.toLocaleLowerCase()
        return this.patients.filter((patient) => {
            return patient.name.toLowerCase().indexOf(phrase) >= 0 || patient.surname.toLowerCase().indexOf(phrase) >= 0
        })
    }

    get(patientId: string): Patient {
        return this.patients.find(patient => patient.id === patientId);
    }

    getAll(): Patient[] {
        return this.patients;
    }

    add(patient: Patient) {
        this.patients.push(patient);
    }

    update(patient: Patient): boolean {
        let patientIndex = this.patients.findIndex((pat) => {
            return pat.id === patient.id;
        })

        console.log(`patientIndex ${patientIndex}`);

        if (patientIndex >= 0) {
            this.patients[patientIndex] = patient;
            return true;
        }

        return false;
    }

    remove(patient: Patient) {
        console.log(patient);
        this.patients = this.patients.filter(pat => {
            return pat.id != patient.id;
        });
    }
}