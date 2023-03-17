import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowApplicatorComponent } from './show-applicator.component';

describe('ShowApplicatorComponent', () => {
  let component: ShowApplicatorComponent;
  let fixture: ComponentFixture<ShowApplicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowApplicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowApplicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
