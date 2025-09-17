import {RowID, RowElement} from './interface';

export function insertRow(row: RowElement): number;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
//task_3/js/crud.d.ts doesn't contain: ["declare function insertRow(row: RowElement): number",
// "declare function deleteRow(rowId: RowID): void", "declare function updateRow("]