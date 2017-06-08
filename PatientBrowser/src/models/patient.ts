export class Patient {
    static createFromJson(json): Patient {
        return new Patient(json.name, json.surname);
    }

    constructor(public name: string, public surname: string) { }
}

export const PATIENTS: Patient[] = [
    { name: 'Malina', surname: 'Kucharska' },
    { name: 'Rafał ', surname: 'Majewski' },
    { name: 'Wiola', surname: 'Nowicka' },
    { name: 'Jadzia', surname: 'Kwiatkowska' },
    { name: 'Zofia', surname: 'Chmielewska' }
];
