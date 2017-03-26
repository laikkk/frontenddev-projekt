class Table {
    constructor(tableId) {
        this.table = document.getElementById(tableId);
    }

    fillOutWith(patientsJsonArray) {
        patientsJsonArray.forEach((patientJson) => {
            let row = this.table.insertRow(-1);
            let patient = new Patient(patientJson.name, patientJson.surname, patientJson.age)
            patient.fillInRow(row)
        })
    }
}