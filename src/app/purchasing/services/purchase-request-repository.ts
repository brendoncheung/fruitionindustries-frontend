import { HttpClient } from "@angular/common/http";
import { PurchaseRequest } from "../model/purchase.request";
import { Injectable } from "@angular/core";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class PurchaseRequestRepository {

    constructor(private http: HttpClient) {}

    requests: PurchaseRequest[] = [
        {isEmergency: true, manufacturer: "TE", quantity: 12, description: "blah", frutionPn: "230222", createDate: Date.now().toString(), requestDate: Date.now().toString(), catagory: "Engineering", createdBy: {firstname: "brendoin", lastname: "Cheung"} },
        {isEmergency: true, manufacturer: "TE", quantity: 12, description: "blah", frutionPn: "230222", createDate: Date.now().toString(), requestDate: Date.now().toString(), catagory: "Engineering", createdBy: {firstname: "brendoin", lastname: "Cheung"} },
        {isEmergency: true, manufacturer: "TE", quantity: 12, description: "blah", frutionPn: "230222", createDate: Date.now().toString(), requestDate: Date.now().toString(), catagory: "Engineering", createdBy: {firstname: "brendoin", lastname: "Cheung"} },
        {isEmergency: true, manufacturer: "TE", quantity: 12, description: "blah", frutionPn: "230222", createDate: Date.now().toString(), requestDate: Date.now().toString(), catagory: "Engineering", createdBy: {firstname: "brendoin", lastname: "Cheung"} },
        {isEmergency: true, manufacturer: "TE", quantity: 12, description: "blah", frutionPn: "230222", createDate: Date.now().toString(), requestDate: Date.now().toString(), catagory: "Engineering", createdBy: {firstname: "brendoin", lastname: "Cheung"} },
    ]

    // Observable<[PurchaseRequest]>

    public getRequests(): PurchaseRequest[] {
        const results = this.http.get<[PurchaseRequest]>('http://localhost:3000/api/purchaserequests')
        return this.requests
    }   

    public getRequestById(id: number) {

    }

    public addRequest() {
        this.http.post(
            'http://localhost:3000/api/purchase/add',
            {
                description: 'hello'
            }
        ).subscribe(data => {
            console.log("newly create request: " + data)
        })
    }



}