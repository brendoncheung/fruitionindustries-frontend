import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-applicator-to-terminal',
  templateUrl: './modal-add-applicator-to-terminal.component.html',
  styleUrls: ['./modal-add-applicator-to-terminal.component.css']
})
export class ModalAddApplicatorToTerminalComponent {

  constructor(private modalService: NgbModal) {

  }


}
