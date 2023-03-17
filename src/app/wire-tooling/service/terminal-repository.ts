import { HttpClient } from "@angular/common/http";
import { Injectable, isDevMode } from "@angular/core";
import { Terminal } from "../model/terminal";
import { Observable } from "rxjs-compat";
import { Applicator } from "../model/applicator";

@Injectable()
export class TerminalRepository {
    private host = '';
    private port = '';
    private baseUrl = '';

    terminals: Terminal[];

    constructor(private http: HttpClient) {
        console.log("isDevMode: ", isDevMode())
        this.host = isDevMode() ? "localhost" : '192.168.0.127'
        this.port = isDevMode() ? '3000' : '3000' // port to your backend
        this.baseUrl = `http://${this.host}:${this.port}/api/terminal/`
        console.log("Host: ", this.host)
        console.log("Port: ", this.port)
        console.log("URL: ", this.baseUrl)
    }

    addTerminal(terminal: Terminal) : Observable<Terminal> {
        return this.http.post<Terminal>(this.baseUrl, terminal);
    }

    getTerminal() : Observable<[Terminal]> {
        return this.http.get<[Terminal]>(this.baseUrl);
    }

    updateApplicatorCompatibility(applicator: Applicator, terminal: Terminal): Observable<Terminal> {
        return this.http.put<Terminal>(this.baseUrl, {terminal: terminal._id, applicator: applicator._id, toRemove: false})
    }

    removeApplicatorCompatibility(applicator: Applicator, terminal: Terminal): Observable<Terminal> {
        return this.http.put<Terminal>(this.baseUrl, {terminal: terminal._id, applicator: applicator._id, toRemove: true})
    }
}