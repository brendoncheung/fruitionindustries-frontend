import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApplicatorItemComponent } from './list-applicator-item.component';

describe('ListApplicatorItemComponent', () => {
  let component: ListApplicatorItemComponent;
  let fixture: ComponentFixture<ListApplicatorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApplicatorItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListApplicatorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
