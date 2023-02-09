import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from  '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { ApplicatorRepository } from '../../services/applicator-repository';

@Component({
  selector: 'app-add-applicator',
  templateUrl: './add-applicator.component.html',
  styleUrls: ['./add-applicator.component.css']
})
export class AddApplicatorComponent {

  constructor(private repository: ApplicatorRepository, private toaster: ToastrService, private http: HttpClient) {}

  onSubmit(form: NgForm) {

    this.repository.addApplicator({
      id: form.value.id,
      description: form.value.description,
      applicatorId: form.value.applicatorId,
      manufacturer: form.value.manufacturer,
      manufacturingNumber: form.value.manufacturingNumber,
      strokeLength: form.value.strokeLength,
      type: form.value.type,
      wireCrimpWidthMin: form.value.wireCrimpWidthMin,
      wireCrimpWidthMax: form.value.wireCrimpWidthMax,
      insulationDiaMin: form.value.insulationDiaMin,
      insulationDiaMax: form.value.insulationDiaMax,
      isLeased: false,
      drawingUrl: form.value.drawingUrl
    })
  }

}
