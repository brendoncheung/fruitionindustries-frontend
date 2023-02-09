import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicatorComponent } from './applicator.component';

describe('ApplicatorComponent', () => {
  let component: ApplicatorComponent;
  let fixture: ComponentFixture<ApplicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
