import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatReactiveFormComponent } from './ngx-mat-reactive-form.component';

describe('NgxMatReactiveFormComponent', () => {
  let component: NgxMatReactiveFormComponent;
  let fixture: ComponentFixture<NgxMatReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
