import {
    Component,
    OnInit,
    ContentChild,
    TemplateRef,
    ViewChild,
    ChangeDetectorRef,
    Input,
    ViewEncapsulation
} from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'ngx-mat-table',
    templateUrl: './ngx-mat-table.component.html',
    styleUrls: ['./ngx-mat-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NgxMatTableComponent implements OnInit {

    public dataSource: MatTableDataSource<any>;
    public columnIds: string[] = [];
    public _columnObjects: any[];
    private _dataArray: any[];
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
    public get dataArray(): any[] {
        return this._dataArray;
    }
    public set dataArray(value: any[]) {
        this._dataArray = value;
        this.dataSource = new MatTableDataSource(this._dataArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        // tslint:disable-next-line: no-string-literal
        if (!this.changeDetectorRefs['destroyed']) {
            this.changeDetectorRefs.detectChanges();
        }
    }

    @Input()
    public get colDisplay(): string {
        return this._colDisplay;
    }
    public set colDisplay(value: string) {
        this._colDisplay = value;
    }

    @ContentChild('buttonTemplate1', { static: false }) optionTemplateRef1: TemplateRef<any>;
    @ContentChild('buttonTemplate2', { static: false }) optionTemplateRef2: TemplateRef<any>;
    @ContentChild('buttonTemplate3', { static: false }) optionTemplateRef3: TemplateRef<any>;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(private changeDetectorRefs: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
    }

    public applyFilter(filterValue: string): void {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
