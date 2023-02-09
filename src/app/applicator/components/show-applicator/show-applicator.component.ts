import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { Applicator } from 'src/app/applicator/model/applicator-model';
import { ApplicatorRepository } from '../../services/applicator-repository';

@Component({
  selector: 'app-show-applicator',
  templateUrl: './show-applicator.component.html',
  styleUrls: ['./show-applicator.component.css']
})
export class ShowApplicatorComponent implements OnInit {

  apps: Applicator[] = [];

  constructor(private repository: ApplicatorRepository) {}

  ngOnInit(): void {
    this.apps = this.repository.getApplicators();
  }
}
