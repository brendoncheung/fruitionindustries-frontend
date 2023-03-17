import { Component, OnInit } from '@angular/core';
import { ApplicatorRepository } from '../../service/applicator-repository';
import { Applicator } from '../../model/applicator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-applicator',
  templateUrl: './show-applicator.component.html',
  styleUrls: ['./show-applicator.component.css']
})
export class ShowApplicatorComponent implements OnInit {

  applicators: Applicator[] = []

  constructor(
    private repository: ApplicatorRepository,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.repository.getApplicators().subscribe(r => {
      this.applicators = r;
    })
  }

  deleteApplicatorCallback(applicator: Applicator) {
    this.repository.removeApplicators(applicator).subscribe(r => {
      this.toastr.success("Remove successfully", `Id: ${applicator._id}`)
      this.applicators = this.applicators.filter(r => r._id !== applicator._id);
    })
  }
}
