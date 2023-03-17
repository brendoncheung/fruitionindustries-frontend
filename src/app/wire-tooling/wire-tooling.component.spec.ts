import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireToolingComponent } from './wire-tooling.component';

describe('WireToolingComponent', () => {
  let component: WireToolingComponent;
  let fixture: ComponentFixture<WireToolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WireToolingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WireToolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
