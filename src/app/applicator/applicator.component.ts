import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-applicator',
  templateUrl: './applicator.component.html',
  styleUrls: ['./applicator.component.css']
})
export class ApplicatorComponent {

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  onAddApplicatorButtonClicked() {
    this.router.navigate(['add-applicator'], {relativeTo: this.activeRoute})
  }

  onShowApplicatorButtonClicked() {
    this.router.navigate(['show-applicator'], {relativeTo: this.activeRoute})
  }

}
