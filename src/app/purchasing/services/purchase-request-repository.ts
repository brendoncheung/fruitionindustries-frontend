import { HttpClient } from "@angular/common/http";
import { PurchaseRequest } from "../model/purchase.request";
import { Injectable, isDevMode } from "@angular/core";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class PurchaseRequestRepository {

    private host = '';
    private port = '';
    private baseUrl = '';

    constructor(private http: HttpClient) {
        console.log("isDevMode: ", isDevMode())
        this.host = isDevMode() ? "localhost" : '192.168.0.127'
        this.port = isDevMode() ? '3000' : '3000' // port to your backend
        this.baseUrl = `http://${this.host}:${this.port}/api/purchase/`
        console.log("Host: ", this.host)
        console.log("Port: ", this.port)
        console.log("URL: ", this.baseUrl)
    }

    public getRequests(): Observable<[PurchaseRequest]> {
        return this.http.get<[PurchaseRequest]>(this.baseUrl)
    }   

    public getArchivedRequests(): Observable<[PurchaseRequest]> {
        return this.http.get<[PurchaseRequest]>(this.baseUrl, {params: {archive: true}})
    }

    public deleteRequest(request: PurchaseRequest) {
        const url = `${this.baseUrl}/${request._id}`
        return this.http.delete<PurchaseRequest>(url)
    }

    public fulfillRequest(requestId: string, poNumber: string) {
        const url = `${this.baseUrl}${requestId}`
        return this.http.put<PurchaseRequest>(url, {id: requestId, poNumber: poNumber}, {observe: 'response'});
    }

    public getRequestById(id: string): Observable<PurchaseRequest> {
        const url = `${this.baseUrl}/${id}`
        return this.http.get<PurchaseRequest>(url)
    }

    public addRequest(request: PurchaseRequest): Observable<PurchaseRequest> {
        console.log(this.baseUrl)
        return this.http.post<PurchaseRequest>(
            this.baseUrl,
            {
                url: request.url,
                isEmergency: request.isEmergency,
                quantity: request.quantity,
                description: request.description,
                manufacturer: request.manufacturer,
                manufacturerNumber: request.manufacturerNumber,
                fruitionPn: request.fruitionPn,
                createDate: request.createDate,
                requestDate: request.requestDate,
                catagory: request.catagory,
                createdBy: {firstname: "anon", lastname: 'anon'},
                isResolved: request.isResolved,
            }
        )
    }
}