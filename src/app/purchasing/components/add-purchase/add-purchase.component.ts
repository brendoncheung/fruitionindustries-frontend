import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PurchaseRequestRepository } from '../../services/purchase-request-repository';


@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent {

  constructor(private repository: PurchaseRequestRepository) {}
  
  onSubmit(form: NgForm) {
    this.repository.addRequest(form.value).subscribe((result) => {
      console.log("uploaded this: " + result)
    })
  }

}
