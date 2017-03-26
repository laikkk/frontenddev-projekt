var Table = (function () {

    function Table(id) {
        this.table = document.getElementById(id);
    }

    Table.prototype.loadPatients = function (patients) {
        var self = this;
        patients.forEach(function (element) {
            var row = self.table.insertRow(-1);
            var patient = new Patient(element.name, element.surname, element.age)
            patient.fillInRow(row);
        });
    }

    return Table;
})()