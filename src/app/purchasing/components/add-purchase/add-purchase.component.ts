import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { PurchaseRequestRepository } from '../../services/purchase-request-repository';
import { HttpErrorResponse } from "@angular/common/http"

import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent {

  form: FormGroup;

  constructor(
    private modal: MatDialog,
    private repository: PurchaseRequestRepository,
    private toastr: ToastrService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,) {
    }
  
  onSubmit(form: NgForm) {
    form.value.createDate = new Date().toLocaleDateString()

    if(form.value.isEmergency == '') {
      form.value.isEmergency = false
    }
    
    this.repository.addRequest(form.value).subscribe((result) => {
      this.toastr.success("Added successfully", `Id: ${result._id}`)
      this.router.navigate(['purchasing/show-purchase-request'])
    }, (error: HttpErrorResponse) => {
      this.toastr.error(error.error, "Fruition Backend error")
    })
  }
}
