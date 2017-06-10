export class Patient {
    static createFromJson(json): Patient {
        return new Patient(json.id, json.name, json.surname, json.imageURL);
    }

    constructor(public id: string, public name: string, public surname: string, public imageURL: string) { }
}

