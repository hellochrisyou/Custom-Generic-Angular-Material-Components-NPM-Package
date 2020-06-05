import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxMatComponentsComponent } from './ngx-mat-components.component';
describe('NgxMatComponentsComponent', () => {
  let component: NgxMatComponentsComponent;
  let fixture: ComponentFixture<NgxMatComponentsComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NgxMatComponentsComponent]
    });
    fixture = TestBed.createComponent(NgxMatComponentsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
