import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchesComponent } from './lunches.component';

describe('LunchesComponent', () => {
  let component: LunchesComponent;
  let fixture: ComponentFixture<LunchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
