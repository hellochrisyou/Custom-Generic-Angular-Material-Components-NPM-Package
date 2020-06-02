import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ExpansionClass } from 'projects/ngx-mat-components/src/lib/ngx-mat-expansion/ngx-mat-expansion.interface';
import { TEST_COL_OBJ, TEST_DISPLAY } from './app.const';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { NgxMatReactiveFormComponent } from 'projects/ngx-mat-components/src/lib/ngx-mat-reactive-form/ngx-mat-reactive-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends NgxMatReactiveFormComponent implements OnInit {
  title = 'custom-generic-angular-material-components';
  testExpansion: ExpansionClass[] = [
    {
      title: 'expansion-name1',
      subTitle: 'subTitle-1',
      description: 'description1',
      array: [
        {
          name: 'testName1',
          team: 'testTeam1',
          points: 1
        },
        {
          name: 'testName2',
          team: 'testTeam2',
          points: 2
        }
      ]
    },
    {
      title: 'expansion-name2',
      subTitle: 'subTitle-2',
      description: 'description2',
      array: [
        {
          name: 'testName3',
          team: 'testTeam3',
          points: 3
        },
        {
          name: 'testName4',
          team: 'testTeam4',
          points: 4
        }
      ]
    },
    {
      title: 'expansion-name3',
      subTitle: 'subTitle-3',
      description: 'description3',
      array: [
        {
          name: 'testName5',
          team: 'testTeam5',
          points: 5
        },
        {
          name: 'testName6',
          team: 'testTeam6',
          points: 6
        }
      ]
    },
  ];

  readonly TEST_COL_OBJ = TEST_COL_OBJ;
  readonly TEST_DISPLAY = TEST_DISPLAY;
  formGroup: any;

  public testControl(): AbstractControl {
    return this.formGroup.get('testCtrl');
  }

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected matSnackBar: MatSnackBar,
    protected matDialog: MatDialog
  ) {
    super(fb, changeDetectorRef, matSnackBar, matDialog);
  }

  public ngOnInit(): void {
    this.formGroup = this.fb.group({
      testCtrl: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
    });
    super.ngOnInit();
  }

  public selectTableRow(index: number): void {

  }

  public submit(formGroupValue: any): void {
    this.openSnackBar('Form Submitted Successfully', 'data');
  }
  openSnackBar(arg0: string, arg1: string) {
    throw new Error("Method not implemented.");
  }
}
