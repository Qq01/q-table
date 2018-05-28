const columDefaultWidth = 100;
const rowDefaultHeight = 50;
export class QTableHeadColumn {
    name: string;
    label: string;
    visible: boolean;
    numeric: boolean;
    width: number;
    constructor(name:string, label:string=null, visible=true, numeric=false, width=100){
        this.name = name;
        this.label = label || name;
        this.visible = visible;
        this.numeric = numeric;
        this.width = width;
    }
}
export class QTableHead {
    columns: QTableHeadColumn[] = [];
    constructor(columns = []) {
        this.columns = columns;
    }
    addColumn(col){
        this.columns.push(col);
    }
}
export class QTableCell {
    width: number = columDefaultWidth;
    name: string;
    private _value: string|number|boolean|null|any;
    size = {
        width:  0,
        height: 0
    };
    constructor(name:string, value:any, width = columDefaultWidth){
        this.name = name;
        this.value = value;
        this.width = width;
    }
    set value(v){
        let isChanged = false;
        if (this._value != v) {
            isChanged = true;
        }
        this._value = v;
        if (isChanged) {
            this.computeSize();
        }
    }
    get value() {
        return this._value;
    }
    private computeSize(){
        const div = document.createElement('div');
        div.style.visibility = 'hidden';
        div.style.zIndex = '-100';
        div.innerHTML = this.value;
        document.body.appendChild(div);
        this.size.height = div.offsetHeight;
        this.size.width = div.offsetWidth;
        document.body.removeChild(div);
    }
}
export class QTableRow {
    height: number = rowDefaultHeight;
    width: number = 0;
    cells: QTableCell[] = [];
    size = {
        width: 0,
        height: 0
    };

    constructor(cells = []) {
        this.cells = cells;
        cells.forEach(cell => {
            this.cells[cell.name] = cell;
        })
        this.computeWidth();
    }
    appendCell(cell) {
        this.cells.push(cell);
        this.cells[cell.name] = cell;
        this.computeWidth();
    }
    computeWidth() {
        let w = 0;
        this.size.width = 0;
        this.size.height = 0;
        this.cells.forEach(cell => {
            w += cell.width;
            this.size.width += cell.size.width;
            if (cell.size.height > this.size.height) {
                this.size.height = cell.size.height;
            }
        });
        this.width = w;
    }
}
export class QTableAdapter {
    head: QTableHead;
    body: QTableRow[] = [];
    columDefaultWidth: number = columDefaultWidth;
    rowDefaultHeight: number = rowDefaultHeight;
    constructor(head, body = []) {
        this.head = head;
        this.body = body;
    }
    appendRow(row){
        this.body.push(row);
    }
}
