import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Patient } from "app/models/patient";

@Injectable()
export class PatientService {
    private patientsURL = '';
    private searchEndpoint = '';
    private options: RequestOptions;

    constructor( @Inject('BASE_URL') private baseURL: string, private http: Http) {
        this.patientsURL = `${this.baseURL}/patients/`;
        this.searchEndpoint = `${this.patientsURL}search?q=`;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: headers });
    }

    update(patient: Patient) {
        return this.http
            .put(this.patientsURL + patient.id, patient, this.options)
            .catch(this.handleErrorObservable);
    }

    add(patient: Patient): Observable<Patient[]> {
        return this.http
            .post(this.patientsURL, patient, this.options)
            .catch(this.handleErrorObservable);
    }

    search(searchPhrase: string): Observable<Patient[]> {
        return this.http
            .get(`${this.searchEndpoint}${searchPhrase}`)
            .map(this.extractData);
    }

    getAll(): Observable<Patient[]> {
        return this.http
            .get(this.patientsURL)
            .map(this.extractData);
    }

    delete(patient: Patient): Observable<Response> {
        return this.http.delete(this.patientsURL + patient.id, this.options);
    }

    private extractData(res: Response): Patient[] {
        const results: Patient[] = [];
        res.json().forEach((element) => {
            const post = Patient.createFromJson(element);
            results.push(post);
        });

        return results;
    }

    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}
