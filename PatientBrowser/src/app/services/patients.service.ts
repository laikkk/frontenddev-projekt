import { Http, Response } from '@angular/http';
import { Patient } from '../../models/patient';
import { Injectable, Inject } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class PatientService {
    private searchEndpoint = '';

    constructor( @Inject('BASE_URL') private baseURL: string, public http: Http) {
        this.searchEndpoint = `${this.baseURL}/patients/search?q=`;
    }

    search(searchPhrase: string): Observable<Patient[]> {
        console.log(searchPhrase);
        return this.http.get(`${this.searchEndpoint}${searchPhrase}`).map(this.extractData);
    }

    extractData(res: Response): Patient[] {
        const results: Patient[] = [];
        res.json().forEach((element) => {
            const post = Patient.createFromJson(element);
            results.push(post);
        });
        return results;
    }
}
