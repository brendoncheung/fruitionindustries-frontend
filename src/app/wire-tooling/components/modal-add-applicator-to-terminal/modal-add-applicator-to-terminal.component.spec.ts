import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddApplicatorToTerminalComponent } from './modal-add-applicator-to-terminal.component';

describe('ModalAddApplicatorToTerminalComponent', () => {
  let component: ModalAddApplicatorToTerminalComponent;
  let fixture: ComponentFixture<ModalAddApplicatorToTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddApplicatorToTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddApplicatorToTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
