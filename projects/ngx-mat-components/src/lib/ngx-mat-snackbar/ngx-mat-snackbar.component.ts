import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'ngx-mat-snackbar',
    templateUrl: './ngx-mat-snackbar.component.html',
    styleUrls: ['./ngx-mat-snackbar.component.scss']
})
export class NgxMatSnackbarComponent implements OnInit {

    constructor(
        public snackBarRef: MatSnackBarRef<NgxMatSnackbarComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: any
    ) { }

    ngOnInit(): void {
    }

}