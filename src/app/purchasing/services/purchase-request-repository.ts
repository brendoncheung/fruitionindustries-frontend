import { HttpClient } from "@angular/common/http";
import { PurchaseRequest } from "../model/purchase.request";
import { Injectable } from "@angular/core";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class PurchaseRequestRepository {

    constructor(private http: HttpClient) {}

    private baseUrl = 'http://localhost:3000/api/purchase/'

    public getRequests(): Observable<[PurchaseRequest]> {
        return this.http.get<[PurchaseRequest]>(this.baseUrl)
    }   

    public getRequestById(id: string): Observable<PurchaseRequest> {
        return this.http.get<PurchaseRequest>(this.baseUrl + id)
    }

    public addRequest(request: PurchaseRequest): Observable<PurchaseRequest> {
        console.log(request.requestDate)
        return this.http.post<PurchaseRequest>(
            this.baseUrl,
            {
                isEmergency: request.isEmergency,
                quantity: request.quantity,
                description: request.description,
                manufacturer: request.manufacturer,
                fruitionPn: request.frutionPn,
                createDate: request.createDate,
                requestDate: request.requestDate,
                catagory: request.catagory,
                createdBy: {firstname: "anon", lastname: 'anon'},
                isResolved: request.isResolved,
            }
        )
    }



}