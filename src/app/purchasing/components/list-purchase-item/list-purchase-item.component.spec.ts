import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchaseItemComponent } from './list-purchase-item.component';

describe('ListPurchaseItemComponent', () => {
  let component: ListPurchaseItemComponent;
  let fixture: ComponentFixture<ListPurchaseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPurchaseItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPurchaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
