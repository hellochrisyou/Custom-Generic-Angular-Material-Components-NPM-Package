import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'ngx-mat-dialog',
    templateUrl: './ngx-mat-dialog.component.html',
    styleUrls: ['./ngx-mat-dialog.component.scss']
})
export class NgxMatDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
    }

}