import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wire-tooling',
  templateUrl: './wire-tooling.component.html',
  styleUrls: ['./wire-tooling.component.css']
})
export class WireToolingComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  onAddApplicatorButtonClicked () {
    this.router.navigate(['add-applicator'], {relativeTo: this.activatedRoute})
  }

  onAddTerminalButtonClicked () {
    this.router.navigate(['add-terminal'], {relativeTo: this.activatedRoute})
  }

  onShowApplicatorButtonClicked () {
    this.router.navigate(['show-applicator'], {relativeTo: this.activatedRoute})
  }

  onShowTerminalButtonClicked () {
    this.router.navigate(['show-terminal'], {relativeTo: this.activatedRoute})
  }

  onToolingSearchButtonClicked() {
    this.router.navigate(['search-tooling'], {relativeTo: this.activatedRoute})
  }

}
