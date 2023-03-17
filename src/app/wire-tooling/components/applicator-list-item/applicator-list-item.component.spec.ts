import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicatorListItemComponent } from './applicator-list-item.component';

describe('ApplicatorListItemComponent', () => {
  let component: ApplicatorListItemComponent;
  let fixture: ComponentFixture<ApplicatorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicatorListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicatorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
