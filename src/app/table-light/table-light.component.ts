import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewChecked, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'q-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit, AfterViewChecked {
  @Input('head') head: {name:string;label:string, sticky?:boolean}[];
  @Input('data') data: {[x:string]:any}[];
  @Input('fixedRows') fixedRows: number[] = [];
  @Input('options') options: {} = {
    bypassSecurity: true,
  };

  @Output('tableClick') tableClick = new EventEmitter();

  @ViewChild('headTable', {read: ElementRef}) headTable: ElementRef;
  @ViewChild('dataTable', {read: ElementRef}) dataTable: ElementRef;
  @ViewChild('headWrapper', {read: ElementRef}) headWrapper: ElementRef;
  @ViewChild('dataWrapper', {read: ElementRef}) dataWrapper: ElementRef;
  @ViewChild('scrollbarFixer', {read: ElementRef}) scrollbarFixer: ElementRef;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event){
    this.updateTableSize();
  }

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    // this.head = mockHead;
    // this.data = mockData;
  }

  ngAfterViewChecked() {
    this.updateTableSize();
  }

  updateTableSize() {
    const headTable = this.headTable.nativeElement as HTMLTableElement;
    const dataTable = this.dataTable.nativeElement as HTMLTableElement;
    if (dataTable.rows.length > 0) {
      const dataRow = dataTable.rows[0];
      if (headTable.rows.length > 0) {
        if (headTable.rows[0].cells.length > 0) {
          const headRow = headTable.rows[0];
          for (let i = 0; i < dataRow.cells.length; i++) {
            headRow.cells[i].style.maxWidth = headRow.cells[i].style.width = dataRow.cells[i].offsetWidth + 'px';
            
          }
        }
      }
    }
    const headWrapper = this.headWrapper.nativeElement as HTMLElement;
    const dataWrapper = this.dataWrapper.nativeElement as HTMLElement;
    dataWrapper.style.marginTop = headWrapper.offsetHeight + 'px';
    dataWrapper.style.height = ((this.el.nativeElement as HTMLElement).offsetHeight - headWrapper.offsetHeight) + 'px';
    this.updateScroll();
  }
  updateScroll() {
    const headWrapper = this.headWrapper.nativeElement as HTMLElement;
    const dataWrapper = this.dataWrapper.nativeElement as HTMLElement;
    const headTable = this.headTable.nativeElement as HTMLTableElement;
    headWrapper.scrollLeft = dataWrapper.scrollLeft;
    const scrollbarWidth = dataWrapper.offsetWidth - dataWrapper.clientWidth;
    (this.scrollbarFixer.nativeElement as HTMLElement).style.minWidth = scrollbarWidth + 'px';
  }
  
  onClick($event:Event, type:string, row:{}, col:{}, index:number) {
    this.tableClick.emit({
      event: $event,
      type: type,
      row: row,
      col: col,
      index
    });
  }

}
