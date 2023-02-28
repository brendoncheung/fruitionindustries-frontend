import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../model/purchase.request';
import { PurchaseRequestRepository } from '../../services/purchase-request-repository';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-archive-purchase',
  templateUrl: './archive-purchase.component.html',
  styleUrls: ['./archive-purchase.component.css']
})
export class ArchivePurchaseComponent implements OnInit { 

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
    "PO Number", 
    "Actions"]

  constructor(
    private repository: PurchaseRequestRepository,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.repository.getArchivedRequests().subscribe(result => {
      console.log("archived requests: ", result)
      this.requests = result;
    })
  }

  onDeleteButtonClicked(request: PurchaseRequest) {
    this.repository.deleteRequest(request).subscribe(r => {
      this.toastr.success(`Id: ${request._id}`, "Delete successful")
      this.requests = this.requests.filter(r => r._id !== request._id)
    }, error => {
      this.toastr.success(error.error, "Backend error")
    })
  }
}
