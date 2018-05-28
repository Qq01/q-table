import { Component, OnInit, Input } from '@angular/core';
import { QTableHeaderColumn } from '../q-table-header-column';
import { QTableAdapter, QTableHead, QTableHeadColumn, QTableRow, QTableCell } from '../q-table-adapter';

const myAdapter = new QTableAdapter(
  new QTableHead([
    new QTableHeadColumn('col1', 'kolumna 1', true, false, 200),
    new QTableHeadColumn('col2', 'kolumna 2', true, false, 200),
    new QTableHeadColumn('col3', 'kolumna 3', true, false, 200)
  ]),
  [
    new QTableRow([
      new QTableCell('col1', 'columna 1, wiersz 1', 200),
      new QTableCell('col2', 'columna 2, wiersz 1', 200),
      new QTableCell('col3', 'columna 3, wiersz 1', 200),
    ]),
    new QTableRow([
      new QTableCell('col1', 'columna 1, wiersz 2', 200),
      new QTableCell('col2', 'columna 2, wiersz 2', 200),
      new QTableCell('col3', 'columna 3, wiersz 2', 200),
    ]),
    new QTableRow([
      new QTableCell('col1', 'columna 1, wiersz 3'),
      new QTableCell('col2', 'columna 2, wiersz 3'),
      new QTableCell('col3', 'columna 3, wiersz 3'),
    ]),
  ]
);
console.log(myAdapter);

@Component({
  selector: 'q-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // @Input('data') data: {string:any}[] = [];
  // @Input('head') head: QTableHeaderColumn[] = [];
  // @Input('width') width: number;
  // @Input('height') height: number;
  adapter = myAdapter;

  constructor() { }

  ngOnInit() {
  }

}
