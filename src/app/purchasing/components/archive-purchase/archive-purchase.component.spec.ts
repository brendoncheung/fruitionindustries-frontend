import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePurchaseComponent } from './archive-purchase.component';

describe('ArchivePurchaseComponent', () => {
  let component: ArchivePurchaseComponent;
  let fixture: ComponentFixture<ArchivePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivePurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
