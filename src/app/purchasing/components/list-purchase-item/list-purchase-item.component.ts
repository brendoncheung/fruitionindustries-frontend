import { Component, Input } from '@angular/core';
import { PurchaseRequest } from '../../model/purchase.request';

@Component({
  selector: 'app-list-purchase-item',
  templateUrl: './list-purchase-item.component.html',
  styleUrls: ['./list-purchase-item.component.css']
})
export class ListPurchaseItemComponent {

  @Input() request: PurchaseRequest;

}
