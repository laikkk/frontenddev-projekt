var Patient = (function () {

    function Patient(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    Patient.prototype.fillInRow = function (row) {
        row.insertCell(0).innerHTML = this.age;
        row.insertCell(1).innerHTML = this.name;
        row.insertCell(2).innerHTML = this.surname;
    }

    return Patient
})()