import { Component, OnInit } from '@angular/core';
import { PurchaseRequestRepository } from '../../services/purchase-request-repository';
import { PurchaseRequest } from '../../model/purchase.request';

@Component({
  selector: 'app-show-purchase',
  templateUrl: './show-purchase.component.html',
  styleUrls: ['./show-purchase.component.css']
})
export class ShowPurchaseComponent implements OnInit {

  requests: PurchaseRequest[] = [];

  constructor(private repository: PurchaseRequestRepository) {}

  ngOnInit(): void {
      const results = this.repository.getRequests()
      results.subscribe((results) => {
        console.log("the result is" + results)
        this.requests = results;
      })
  }

}
