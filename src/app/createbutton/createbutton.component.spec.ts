import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebuttonComponent } from './createbutton.component';

describe('CreatebuttonComponent', () => {
  let component: CreatebuttonComponent;
  let fixture: ComponentFixture<CreatebuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
