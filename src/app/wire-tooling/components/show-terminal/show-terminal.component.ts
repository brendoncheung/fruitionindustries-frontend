import { Component, OnInit } from '@angular/core';
import { Terminal } from '../../model/terminal';
import { TerminalRepository } from '../../service/terminal-repository';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Applicator } from '../../model/applicator';
import { ApplicatorRepository } from '../../service/applicator-repository';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-show-terminal',
  templateUrl: './show-terminal.component.html',
  styleUrls: ['./show-terminal.component.css']
})
export class ShowTerminalComponent implements OnInit {

  terminals: Terminal[]
  applicators: Applicator[];

  selectedApplicator: Applicator;
  selectedTerminal: Terminal;

  // variables for seeing/adding terminal specs

  specificationForm = this.fb.group({
    specs: this.fb.array([])
  })

  get specs () {
    return this.specificationForm.controls['specs'] as FormArray;
  }

  addNewSpecs() {
    const specRow = this.fb.group({
      gauge: [''],
      crimpHeightMin: [''],
      crimpHeightMax: [''],
      insulationHeightMin: [''],
      insulationHeightMax: [''],
    })

    this.specs.push(specRow)
  }

  constructor(
    private terminalRepository: TerminalRepository,
    private applicatorRepository: ApplicatorRepository,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private fb: FormBuilder) {}

  ngOnInit(): void {

    this.terminalRepository.getTerminal().subscribe(r => {
        console.log(r)
        this.terminals = r
    }, (error: HttpErrorResponse) => {
      console.log(error.message)
    })

    this.applicatorRepository.getApplicators().subscribe(result => {
      this.applicators = result
    })
  }

  public deleteApplicatorCallback(terminal: Terminal, applicator: Applicator) {
    this.terminalRepository.removeApplicatorCompatibility(applicator, terminal).subscribe(result => {
      this.toastr.success(`AppId: ${result._id}`, `Deleted App-${applicator.fruitionAppId} from terminal ${terminal.fruitionNumber} successfully`)
      this.terminals.forEach((value, index, arr) => {
        if(value._id == result._id) {
          arr[index] = result;
        }
      })
      this.modalService.dismissAll();
    })
  }

  public seeTerminalSpecCallback(terminal: Terminal, content: any) {
    this.selectedTerminal = terminal;
    this.specs.clear();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((selectedTerminal => {
    }))
  }

  public attachedApplicatorCallback(terminal: Terminal, content: any) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'}).result.then((selectedApplicator => {
      // updating the applicator with the terminal
      this.applicatorRepository.updateApplicatorTerminalCompatibility(selectedApplicator, terminal).subscribe(result => {
        this.toastr.success(`Applicator: ${selectedApplicator.fruitionAppId} has been updated with terminal`, "Applicator updated successfully")
      }, (error: HttpErrorResponse) => {
        this.toastr.error(`Applicator: ${selectedApplicator.fruitionAppId} did not update`, "Applicator did not update")
      })
      // the result is the selected applicator
      this.terminalRepository.updateApplicatorCompatibility(selectedApplicator, terminal).subscribe(result => {
        const index = this.terminals.findIndex(t => t._id == result._id)
        if(index !== -1) {
          this.terminals[index] = result
          this.toastr.success("Update successfully", `Applicator: ${selectedApplicator.fruitionAppId} was attached`)
        }
      }, (error: HttpErrorResponse) => {
        this.toastr.error("This applicator is already attached", "Duplicate applicator detected")
      })
    }))
  }

  addNewTerminalSpecification() {
    this.addNewSpecs();
  }
}
