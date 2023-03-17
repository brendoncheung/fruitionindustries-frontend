import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Applicator } from '../../model/applicator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-applicator-list-item',
  templateUrl: './applicator-list-item.component.html',
  styleUrls: ['./applicator-list-item.component.css']
})
export class ApplicatorListItemComponent {

  @Input() applicator: Applicator
  @Output() deleteApplicatorEvent = new EventEmitter<Applicator>()
  
  constructor(private toastr: ToastrService) {}

  onDeleteApplicatorButtonClicked() {
    if(!this.applicator) this.toastr.error("Invalid applicator id", "No id was found")
    this.deleteApplicatorEvent.emit(this.applicator)
  }
}
