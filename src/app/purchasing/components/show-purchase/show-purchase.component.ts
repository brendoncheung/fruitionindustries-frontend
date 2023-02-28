import { Component, OnInit } from '@angular/core';
import { PurchaseRequestRepository } from '../../services/purchase-request-repository';
import { PurchaseRequest } from '../../model/purchase.request';
import { MatDialog } from '@angular/material/dialog';
import { FullfilPurchaseModalComponent } from '../fullfil-purchase-modal/fullfil-purchase-modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-purchase',
  templateUrl: './show-purchase.component.html',
  styleUrls: ['./show-purchase.component.css']
})
export class ShowPurchaseComponent implements OnInit {

  requests: PurchaseRequest[] = [];
  displayedColumns = [
    "Type", 
    "URL",
    "Description",
    "Created Date", 
    "Request Date" ,
    "Manufacturer", 
    "Manufacturer Number", 
    "Fruition Number", 
    "More detail",]

  constructor(
    private dialog: MatDialog,
    private repository: PurchaseRequestRepository,
    private toastr: ToastrService,
    ) {}

  ngOnInit(): void {
      const results = this.repository.getRequests()
      results.subscribe((results) => {
        console.log("the result is",  results)
        this.requests = results;
      })
  }

  onDetailButtonClicked(request: PurchaseRequest) {
    const diagRef = this.dialog.open(FullfilPurchaseModalComponent, {data: request})
    diagRef.afterClosed().subscribe(results => {
      this.repository.fulfillRequest(request._id, results.poNumber).subscribe((r) => {
        this.toastr.info(`Request fulfilled with PO: ${results.poNumber}`)
        this.requests = this.requests.filter(r => r._id !== request._id)
      })
    })
  }

  onDeleteButtonClicked(request: PurchaseRequest) {
    this.repository.deleteRequest(request).subscribe(r => {
      this.toastr.success(`${request._id}`, "Deleted successfully :)")
      this.requests = this.requests.filter(r => r._id !== request._id)
    })
  }
}
