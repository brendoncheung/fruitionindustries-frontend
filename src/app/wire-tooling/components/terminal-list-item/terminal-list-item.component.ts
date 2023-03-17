import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Terminal } from '../../model/terminal';
import { Applicator } from '../../model/applicator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terminal-list-item',
  templateUrl: './terminal-list-item.component.html',
  styleUrls: ['./terminal-list-item.component.css']
})
export class TerminalListItemComponent {
  @Input() terminal: Terminal
  @Output() editTerminalEvent = new EventEmitter();
  @Output() attachApplicatorEvent = new EventEmitter<Terminal>();
  @Output() seeTerminalSpecEvent = new EventEmitter();
  @Output() deleteApplicatorEvent = new EventEmitter();

  public selectedApplicator: Applicator;

  constructor(private modalService: NgbModal) {}

  onAttachApplicationButtonClicked() {
    this.attachApplicatorEvent.emit()
  }

  onSeeTerminalSpecButtonClicked() {
    this.seeTerminalSpecEvent.emit()
  }
  
  onApplicatorButton_DeleteButtonClicked() {
    this.deleteApplicatorEvent.emit(this.selectedApplicator);
    this.modalService.dismissAll();
  }
  
  onApplicatorButtonClicked(applicator: Applicator, content: any) {
    this.selectedApplicator = applicator;
    const ref = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }
}
