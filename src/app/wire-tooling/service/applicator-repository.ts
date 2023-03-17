import { HttpClient } from "@angular/common/http";
import { Injectable, isDevMode } from "@angular/core";
import { Applicator } from "../model/applicator";
import { Observable } from "rxjs";
import { Terminal } from "../model/terminal";

@Injectable()
export class ApplicatorRepository {

    applicators: Applicator[] = [];

    private host = '';
    private port = '';
    private baseUrl = '';

    constructor(private http: HttpClient) {
        console.log("isDevMode: ", isDevMode())
        this.host = isDevMode() ? "localhost" : '192.168.0.127'
        this.port = isDevMode() ? '3000' : '3000' // port to your backend
        this.baseUrl = `http://${this.host}:${this.port}/api/applicator/`
        console.log("Host: ", this.host)
        console.log("Port: ", this.port)
        console.log("URL: ", this.baseUrl)
    }

    addApplicator(applicator: Applicator): Observable<Applicator> {
        return this.http.post<Applicator>(this.baseUrl, applicator)
    }

    getApplicators() : Observable<[Applicator]> {
        return this.http.get<[Applicator]>(this.baseUrl)
    }

    removeApplicators(applicator: Applicator) : Observable<Applicator> {
        return this.http.delete<Applicator>(this.baseUrl + `${applicator._id}`)
    }

    updateApplicatorTerminalCompatibility(applicator: Applicator, terminal: Terminal): Observable<Applicator> {
        return this.http.put<Applicator>(this.baseUrl + `${applicator._id}`, {terminalId: terminal._id})
    }
}