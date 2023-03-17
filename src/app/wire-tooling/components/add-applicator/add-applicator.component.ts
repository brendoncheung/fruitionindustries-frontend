import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplicatorRepository } from '../../service/applicator-repository';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-applicator',
  templateUrl: './add-applicator.component.html',
  styleUrls: ['./add-applicator.component.css']
})
export class AddApplicatorComponent {

  constructor(
    private repository: ApplicatorRepository,
    private toastr: ToastrService) {}

  onSubmit(form: NgForm) {

    form.value.isLeased === "Yes" ? form.value.isLeased = true : form.value.isLeased = false;
    form.value.strokeLength === "30mm" ? form.value.strokeLength = 30 : form.value.strokeLength = 40;
    console.log(form.value)
     this.repository.addApplicator(form.value).subscribe(r => {
      this.toastr.success("Added successfully", `Id: ${r._id}`)
     }, (error: HttpErrorResponse) => {
        this.toastr.error(error.error, "Fruition Backend error")
     })
  }

}
