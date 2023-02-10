import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestRepository } from './services/purchase-request-repository';

@Component({
  selector: 'app-purchasing',
  templateUrl: './purchasing.component.html',
  styleUrls: ['./purchasing.component.css']
})

export class PurchasingComponent {

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    ) {}

  onCreatePurchaseRequestClicked() {
    this.router.navigate(['add-purchase-request'], {relativeTo: this.activatedRoute})
  }

  onShowPurchaseRequestClicked() {
    this.router.navigate(['show-purchase-request'], {relativeTo: this.activatedRoute})
  }

}
