"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patient_datasource_1 = require("./routes/patient/patient.datasource");
const patient_router_1 = require("./routes/patient/patient.router");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
// var cors = require('cors')
const cors = require("cors");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cors());
    }
    routes() {
        let router = express.Router();
        let patientDataSource = new patient_datasource_1.PatientDataSource();
        let patientRouter = new patient_router_1.PatientRouter(patientDataSource);
        patientRouter.configuredRouter(router);
        this.express.use('/Patients/', router);
    }
}
exports.default = new App().express;
