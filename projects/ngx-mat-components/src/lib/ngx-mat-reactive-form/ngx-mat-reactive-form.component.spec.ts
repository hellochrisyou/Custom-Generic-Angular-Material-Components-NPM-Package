import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { NgxMatReactiveFormComponent } from './ngx-mat-reactive-form.component';
describe('NgxMatReactiveFormComponent', () => {
  let component: NgxMatReactiveFormComponent;
  let fixture: ComponentFixture<NgxMatReactiveFormComponent>;
  beforeEach(() => {
    const changeDetectorRefStub = () => ({});
    const formBuilderStub = () => ({});
    const matSnackBarStub = () => ({
      openFromComponent: (ngxMatSnackbarComponent, object) => ({})
    });
    const matDialogStub = () => ({
      open: (ngxMatDialogComponent, object) => ({})
    }); 
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NgxMatReactiveFormComponent],
      providers: [
        { provide: ChangeDetectorRef, useFactory: changeDetectorRefStub },
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: MatSnackBar, useFactory: matSnackBarStub },
        { provide: MatDialog, useFactory: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(NgxMatReactiveFormComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
