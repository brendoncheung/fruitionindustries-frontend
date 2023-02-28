import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullfilPurchaseModalComponent } from './fullfil-purchase-modal.component';

describe('FullfilPurchaseModalComponent', () => {
  let component: FullfilPurchaseModalComponent;
  let fixture: ComponentFixture<FullfilPurchaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullfilPurchaseModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullfilPurchaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
