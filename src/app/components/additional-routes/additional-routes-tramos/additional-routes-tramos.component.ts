import { RouteService } from './../../../services/route.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tramo } from 'src/app/models/tramo';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-additional-routes-tramos',
  templateUrl: './additional-routes-tramos.component.html',
  styleUrls: ['./additional-routes-tramos.component.scss']
})
export class AdditionalRoutesTramosComponent implements OnInit {

  title = 'myTranslogic';
  sideBarOpen = true;

  dataSource = new MatTableDataSource<Tramo>();
  displayedColumns: string[] = ['select', 'id', 'description'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selection = new SelectionModel<any>(true, []);

  constructor(@Inject(MAT_DIALOG_DATA) public route: any, private dialog: MatDialog, private api: RouteService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.api.getAllTramosByRouteId(this.route.id).subscribe(
      (data: Tramo[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}