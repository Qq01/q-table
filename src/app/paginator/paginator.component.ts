import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'q-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input('limitOptions') limitOptions = [10, 20, 40, 80, 100];
  _limit: number = 10;
  @Input('limit')
  set limit(v) {
    if (typeof v == 'string') {
      this._limit = parseInt(v);
    } else {
      this._limit = v;
    }
  }
  get limit() {
    return this._limit;
  }
  @Output('limitChange') limitChange = new EventEmitter();

  _page: number = 1;
  @Input('page')
  set page(v){
    if (typeof v == 'string') {
      this._page = parseInt(v);
    } else {
      this._page = v;
    }
  }
  get page(){
    return this._page;
  }
  @Output('pageChange') pageChange = new EventEmitter();

  @Input('length') length = 0;

  constructor() { }

  ngOnInit() {
  }

  countPages(){
    return Math.ceil(this.length / this.limit);
  }
  getListOfPages(){
    const arr = new Array(this.countPages());
    for (let i = 0; i < arr.length; i++) {
      arr[i] = '[' + (i + 1) + '] ' + ((this.limit * i) + 1) + ' - ' + Math.min((this.limit * (i + 2)), this.length);      
    }
    // arr.forEach((v, i, a) => {
    //   // a[i] = 'aa' +  (this.limit * (i+1)) + ' - ' + Math.min((this.limit * (i + 2)), this.length);
    // });
    return arr;
  }
  pageNext(){
    if (this.page + 1 <= this.countPages()) {
      this.page++;
    }
  }
  pagePrev(){
    if (this.page - 1 >= 1) {
      this.page--;
    }
  }

}
