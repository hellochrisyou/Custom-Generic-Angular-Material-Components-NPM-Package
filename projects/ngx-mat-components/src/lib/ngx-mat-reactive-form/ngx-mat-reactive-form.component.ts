import { RequiredStateMatcher } from './ngx-mat-reactive-form.error-state-matcher';
import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray, AbstractControl, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { FORM_MARK_TOUCHED } from './ngx-mat-reactive-form.utils';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxMatSnackbarComponent } from '../ngx-mat-snackbar/ngx-mat-snackbar.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxMatDialogComponent } from '../ngx-mat-dialog/ngx-mat-dialog.component';

@Component({
  selector: 'NgxMat-ReactiveForm',
  template: ``,
  styles: [
  ]
})
export class NgxMatReactiveFormComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup;
  public formArray: FormArray;
  public matcher = new RequiredStateMatcher();

  protected componentIdle: Subject<boolean> = new Subject();
  protected abstractControl: AbstractControl;

  constructor(
    public formBuilder: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.componentIdle.next(true);
    this.componentIdle.complete();
  }
  public checkFieldNameError(fieldName: string): boolean {
    if (this.formGroup) {
      const formGroup: AbstractControl = this.formGroup.get(fieldName) as AbstractControl;
      return formGroup && formGroup.invalid && (formGroup.dirty || formGroup.touched);
    }
    return false;
  }

  public execFOrmValidation(): void {
    FORM_MARK_TOUCHED(this.abstractControl);
  }

  public openDialog(dataArg: any, panelClassArg: string) {
    this.dialog.open(NgxMatDialogComponent, {
      data: {
        data: dataArg,
        panelClass: panelClassArg,
      }
    });
  }

  public openSnackBar(message: string, panelClassArg: string): void {
    this.snackBar.openFromComponent(NgxMatSnackbarComponent, {
      data: message,
      panelClass: panelClassArg,
      duration: 5000
    });
  }
}
