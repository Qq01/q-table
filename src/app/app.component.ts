import { Component } from '@angular/core';
const mockHead = [
  {'name': 'col1', 'label': '<b>kolumna 1</b>', sticky: true},
  {'name': 'col2', 'label': 'kolumna 2 <input />'},
  {'name': 'col3', 'label': 'kolumna 3'},
  {'name': 'col4', 'label': 'kolumna 4'},
  {'name': 'col5', 'label': 'kolumna 5'},
];
const mockData = [
  {'col1': 'wiersz 1, kolumna 1', 'col2': 'wiersz 1, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 1, kolumna 5'},
  {'col1': 'wiersz 2, kolumna 1', 'col2': 'wiersz 2, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 2, kolumna 5'},
  {'col1': 'wiersz 3, kolumna 1', 'col2': 'wiersz 3, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 3, kolumna 5'},
  {'col1': 'wiersz 4, kolumna 1', 'col2': 'wiersz 4, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 4, kolumna 5'},
  {'col1': 'wiersz 5, kolumna 1', 'col2': 'wiersz 5, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 5, kolumna 5'},
  {'col1': 'wiersz 1, kolumna 1', 'col2': 'wiersz 1, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 1, kolumna 5'},
  {'col1': 'wiersz 2, kolumna 1', 'col2': 'wiersz 2, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 2, kolumna 5'},
  {'col1': 'wiersz 3, kolumna 1', 'col2': 'wiersz 3, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 3, kolumna 5'},
  {'col1': 'wiersz 4, kolumna 1', 'col2': 'wiersz 4, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 4, kolumna 5'},
  {'col1': 'wiersz 5, kolumna 1', 'col2': 'wiersz 5, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 5, kolumna 5'},
  {'col1': 'wiersz 1, kolumna 1', 'col2': 'wiersz 1, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 1, kolumna 5'},
  {'col1': 'wiersz 2, kolumna 1', 'col2': 'wiersz 2, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 2, kolumna 5'},
  {'col1': 'wiersz 3, kolumna 1', 'col2': 'wiersz 3, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 3, kolumna 5'},
  {'col1': 'wiersz 4, kolumna 1', 'col2': 'wiersz 4, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 4, kolumna 5'},
  {'col1': 'wiersz 5, kolumna 1', 'col2': 'wiersz 5, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 5, kolumna 5'},
  {'col1': 'wiersz 1, kolumna 1', 'col2': 'wiersz 1, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 1, kolumna 5'},
  {'col1': 'wiersz 2, kolumna 1', 'col2': 'wiersz 2, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 2, kolumna 5'},
  {'col1': 'wiersz 3, kolumna 1', 'col2': 'wiersz 3, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 3, kolumna 5'},
  {'col1': 'wiersz 4, kolumna 1', 'col2': 'wiersz 4, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 4, kolumna 5'},
  {'col1': 'wiersz 5, kolumna 1', 'col2': 'wiersz 5, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 5, kolumna 5'},
  {'col1': 'wiersz 1, kolumna 1', 'col2': 'wiersz 1, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 1, kolumna 5'},
  {'col1': 'wiersz 2, kolumna 1', 'col2': 'wiersz 2, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 2, kolumna 5'},
  {'col1': 'wiersz 3, kolumna 1', 'col2': 'wiersz 3, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 3, kolumna 5'},
  {'col1': 'wiersz 4, kolumna 1', 'col2': 'wiersz 4, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 4, kolumna 5'},
  {'col1': 'wiersz 5, kolumna 1', 'col2': 'wiersz 5, kolumna 2', 'col3': 'wiersz 1, kolumna 3', 'col4': 'wiersz 1, kolumna 4', 'col5': 'wiersz 5, kolumna 5'},
];

@Component({
  selector: 'q-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mockHead = mockHead;
  mockData = mockData;
  mockFixedRows = [5];

  limitOptions = [10, 20, 30];
  limit = 10;
  page = 1;
  length = 100;
}
