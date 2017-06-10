import { Patient, PatientDataSource } from './patient.datasource';
import { Router, Request, Response, NextFunction } from 'express';

export class PatientRouter {
    constructor(private patientDataSource: PatientDataSource) { }

    configuredRouter(router: Router): Router {
        router.get('/search/', this.query);
        router.get('/', this.getAll);
        router.get('/:id', this.getById);
        router.post('/', this.addPatient);
        router.put('/:id', this.updatePatient);
        router.delete('/:id', this.removePatient);

        return router
    }
    query = (req: Request, res: Response, next: NextFunction) => {
        if (req.query.q) {
            res.json(this.patientDataSource.query(req.query.q));
        } else {
            res.json([]);
        }
    }

    getAll = (req: Request, res: Response, next: NextFunction) => {
        res.json(this.patientDataSource.getAll());
    }

    getById = (req: Request, res: Response, next: NextFunction) => {
        let patientId = req.params.id
        let patient = this.patientDataSource.get(patientId)
        if (patient) {
            res.json(patient);
        } else {
            res.send(404, { msg: "Couldn't find patient with given id" });
        }
    }

    addPatient = (req: Request, res: Response, next: NextFunction) => {
        let id = (req.body.id) ? req.body.id : Math.round(new Date().getTime() / 1000).toString();

        if (req.body.name && req.body.surname) {
            let patient = new Patient(id, req.body.name, req.body.surname, req.body.imageURL);
            this.patientDataSource.add(patient);
            res.send(201, patient)
        } else {
            res.send(400, { msg: "Couldn't parse json" });
        }
    }

    updatePatient = (req: Request, res: Response, next: NextFunction) => {
        if (req.body.id && req.body.name && req.body.surname) {
            let patient = new Patient(req.body.id, req.body.name, req.body.surname, req.body.imageURL);
            if (this.patientDataSource.update(patient)) {
                res.send(patient);
            } else {
                res.send(404, { msg: "Couldn't find patient with given id", patient: patient });
            }
        } else {
            res.send(400, { msg: "Couldn't parse json" });
        }
    };

    removePatient = (req: Request, res: Response, next: NextFunction) => {
        if (req.params.id) {
            let patient = new Patient(req.params.id, '', '', '');
            this.patientDataSource.remove(patient)
            res.send();
        } else {
            res.send(400, { msg: "Couldn't parse json" });
        }
    };
}