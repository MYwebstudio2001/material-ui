import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss'],
  standalone: true,
  imports: [MaterialModule,CommonModule]
})
export class MatTableComponent {
  displayedColumns: string[] = ['selection','position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection:any = new SelectionModel<PeriodicElement>(true, []);
  selectAll: boolean = false;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      // this.displayedColumns.shift()
      return;
    } else{
      // if(!this.displayedColumns.includes('selection')) this.displayedColumns.unshift('selection')
    }
    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
