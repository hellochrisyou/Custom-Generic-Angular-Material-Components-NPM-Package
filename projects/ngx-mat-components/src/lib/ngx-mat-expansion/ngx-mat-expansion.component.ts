import { Component, OnInit, Inject, Input, ContentChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ExpansionClass } from './ngx-mat-expansion.interface';

@Component({
    selector: 'ngx-mat-expansion',
    templateUrl: './ngx-mat-expansion.component.html',
    styleUrls: ['./ngx-mat-expansion.component.scss']
})
export class NgxMatExpansionComponent implements OnInit {


    public columnIds: string[] = [];
    private _expansionObjects: ExpansionClass[] = [];
    public dataSource: MatTableDataSource<any>;
    public _columnObjects: any[];
    private _colDisplay: string;

    @Input()
    public get columnObjects() {
        return this._columnObjects;
    }
    public set columnObjects(colObjArr: any[]) {
        if (colObjArr) {
            this.columnIds = colObjArr.map(c => c.columnId);
        }
        this._columnObjects = colObjArr;
    }

    @Input()
    public get colDisplay(): string {
        return this._colDisplay;
    }
    public set colDisplay(value: string) {
        this._colDisplay = value;
    }

    @Input()
    public get expansionObjects() {
        return this._expansionObjects;
    }
    public set expansionObjects(objArg: any[]) {
        this._expansionObjects = objArg;
        if (!this.changeDetectorRefs['destroyed']) {
            this.changeDetectorRefs.detectChanges();
        }
    }

    @ContentChild('buttonTemplate1', { static: false }) optionTemplateRef1: TemplateRef<any>;
    @ContentChild('buttonTemplate2', { static: false }) optionTemplateRef2: TemplateRef<any>;
    @ContentChild('buttonTemplate3', { static: false }) optionTemplateRef3: TemplateRef<any>;

    constructor(
        private changeDetectorRefs: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
    }

}