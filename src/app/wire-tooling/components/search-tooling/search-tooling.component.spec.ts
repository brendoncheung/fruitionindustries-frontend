import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchToolingComponent } from './search-tooling.component';

describe('SearchToolingComponent', () => {
  let component: SearchToolingComponent;
  let fixture: ComponentFixture<SearchToolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchToolingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchToolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
