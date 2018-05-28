export class QTableHeaderColumn {
    name: string = '';
    label: string = '';
    width:number = 100;
    constructor(name, label, width) {
        this.name = name;
        this.label = label || name;
        this.width = width || 100;
    }
}
