"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patient_datasource_1 = require("./patient.datasource");
class PatientRouter {
    constructor(patientDataSource) {
        this.patientDataSource = patientDataSource;
        this.getAll = (req, res, next) => {
            res.json(this.patientDataSource.getAll());
        };
        this.getById = (req, res, next) => {
            let patientId = req.params.id;
            let patient = this.patientDataSource.get(patientId);
            if (patient) {
                res.json(patient);
            }
            else {
                res.send(404, { msg: "Couldn't find patient with given id" });
            }
        };
        this.addPatient = (req, res, next) => {
            let id = (req.body.id) ? req.body.id : Math.round(new Date().getTime() / 1000).toString();
            if (req.body.name && req.body.surname) {
                let patient = new patient_datasource_1.Patient(id, req.body.name, req.body.surname);
                this.patientDataSource.add(patient);
                res.send(201, patient);
            }
            else {
                res.send(400, { msg: "Couldn't parse json" });
            }
        };
        this.updatePatient = (req, res, next) => {
            if (req.body.id && req.body.name && req.body.surname) {
                let patient = new patient_datasource_1.Patient(req.body.id, req.body.name, req.body.surname);
                if (this.patientDataSource.update(patient)) {
                    res.send(patient);
                }
                else {
                    res.send(404, { msg: "Couldn't find patient with given id", patient: patient });
                }
            }
            else {
                res.send(400, { msg: "Couldn't parse json" });
            }
        };
        this.removePatient = (req, res, next) => {
            if (req.body.id && req.body.name && req.body.surname) {
                let patient = new patient_datasource_1.Patient(req.body.id, req.body.name, req.body.surname);
                this.patientDataSource.remove(patient);
                res.send();
            }
            else {
                res.send(400, { msg: "Couldn't parse json" });
            }
        };
    }
    configuredRouter(router) {
        router.get('/', this.getAll);
        router.get('/:id', this.getById);
        router.post('/', this.addPatient);
        router.put('/:id', this.updatePatient);
        router.delete('/:id', this.removePatient);
        return router;
    }
}
exports.PatientRouter = PatientRouter;
