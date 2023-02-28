import { Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PurchaseRequest } from '../../model/purchase.request';

@Component({
  selector: 'app-fullfil-purchase-modal',
  templateUrl: './fullfil-purchase-modal.component.html',
  styleUrls: ['./fullfil-purchase-modal.component.css']
})
export class FullfilPurchaseModalComponent {

  request: PurchaseRequest;
  poNumber: string = ""

  constructor(
    public dialogRef: MatDialogRef<FullfilPurchaseModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: PurchaseRequest
  ) {
    this.request = data;
  }

  onCancelButtonClicked() {
    this.dialogRef.close(false)
  }

  onConfirmButtonClicked() {
    if(this.poNumber.length === 0) return
    this.dialogRef.close({isResolved: true, poNumber: this.poNumber})
    
  }

}
