import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TerminalRepository } from '../../service/terminal-repository';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-terminal',
  templateUrl: './add-terminal.component.html',
  styleUrls: ['./add-terminal.component.css']
})
export class AddTerminalComponent {

  constructor(
    private repository: TerminalRepository,
    private toastr: ToastrService,
    private router: Router, 
    private activatedRoute: ActivatedRoute){}

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.repository.addTerminal(form.value).subscribe(r => {
      this.toastr.success("Added successfuly", `Id: ${r._id}`)
      this.router.navigate(['wire-tooling/show-terminal'])
    }, (error: HttpErrorResponse) => {
      this.toastr.error(error.error, "Fruition Backend error")
    })
  }
}
