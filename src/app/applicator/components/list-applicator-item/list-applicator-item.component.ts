import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Applicator } from '../../model/applicator-model';

@Component({
  selector: 'app-list-applicator-item',
  templateUrl: './list-applicator-item.component.html',
  styleUrls: ['./list-applicator-item.component.css']
})
export class ListApplicatorItemComponent {

  @Input() applicator: Applicator;
  @Output() onClickEmitter = new EventEmitter<Applicator>();

  onClick() {
    console.log('applicator item clicked')
  }

}
