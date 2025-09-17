/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create an object with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
};

// Insert row and get new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create updated row with age field
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);