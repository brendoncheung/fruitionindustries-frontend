import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicatorComponent } from './add-applicator.component';

describe('AddApplicatorComponent', () => {
  let component: AddApplicatorComponent;
  let fixture: ComponentFixture<AddApplicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApplicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddApplicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
