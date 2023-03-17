import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalListItemComponent } from './terminal-list-item.component';

describe('TerminalListItemComponent', () => {
  let component: TerminalListItemComponent;
  let fixture: ComponentFixture<TerminalListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
