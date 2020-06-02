import { ColumnObject } from 'projects/ngx-mat-components/src/lib/ngx-mat-table/ngx-mat-table.interface';

export const TEST_COL_OBJ: ColumnObject[] = [
    { columnId: 'option1', propertyName: '' },
    { columnId: 'Name', propertyName: 'name' },
    { columnId: 'Team', propertyName: 'team' },
    { columnId: 'Points', propertyName: 'points' }
];

export const TEST_DISPLAY = [
    'Select', 'Name', 'Team', 'Points'
];