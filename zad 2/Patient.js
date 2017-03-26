class Patient {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age
    }

    fillInRow(row) {
        row.insertCell(0).innerHTML = this.age
        row.insertCell(1).innerHTML = this.name
        row.insertCell(2).innerHTML = this.surname
    }
}