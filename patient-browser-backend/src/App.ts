import { PatientDataSource, Patient } from './routes/patient/patient.datasource';
import { PatientRouter } from './routes/patient/patient.router';

import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
// var cors = require('cors')
import * as cors from 'cors';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cors());
    }

    private routes(): void {
        let router = express.Router();
        let patientDataSource = new PatientDataSource();
        let patientRouter = new PatientRouter(patientDataSource);

        patientRouter.configuredRouter(router)

        this.express.use('/Patients/', router);
    }
}

export default new App().express;