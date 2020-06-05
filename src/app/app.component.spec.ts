import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TEST_COL_OBJ } from './app.const';
import { TEST_DISPLAY } from './app.const';
import { NgxMatReactiveFormComponent } from 'projects/ngx-mat-components/src/lib/ngx-mat-reactive-form/ngx-mat-reactive-form.component';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const changeDetectorRefStub = () => ({});
    const formBuilderStub = () => ({ group: object => ({}) });
    const matSnackBarStub = () => ({});
    const matDialogStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: ChangeDetectorRef, useFactory: changeDetectorRefStub },
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: MatSnackBar, useFactory: matSnackBarStub },
        { provide: MatDialog, useFactory: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`TEST_COL_OBJ has default value`, () => {
    expect(component.TEST_COL_OBJ).toEqual(TEST_COL_OBJ);
  });
  it(`TEST_DISPLAY has default value`, () => {
    expect(component.TEST_DISPLAY).toEqual(TEST_DISPLAY);
  });
});
