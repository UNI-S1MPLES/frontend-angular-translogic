import { AddEditRoutesComponent } from './../add-edit-routes/add-edit-routes.component';
import { Route } from './../../models/route';
import { RouteService } from './../../services/route.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Cuadro de dialogo
import { MatTableDataSource } from '@angular/material/table'; // Table
import { MatSort } from '@angular/material/sort'; // Table
import { MatPaginator } from '@angular/material/paginator'; // Table
import { MatSnackBar } from '@angular/material/snack-bar'; // Mensaje de alerta

@Component({
  selector: 'app-list-routes',
  templateUrl: './list-routes.component.html',
  styleUrls: ['./list-routes.component.scss']
})
export class ListRoutesComponent implements OnInit {

  title = 'myTranslogic';
  sideBarOpen = true;

  dataSource = new MatTableDataSource<Route>();
  displayedColumns: string[] = ['id', 'idAdministrator', 'idRoutesTramos', 'startPlace','endPlace','actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: RouteService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(AddEditRoutesComponent, {
      width: '50%'
    }).afterClosed().subscribe(value => {
      if (value == 'agregar') {
        this.getAllProducts();
      }
    });
  }

  getAllProducts() {
    this.api.get().subscribe(
      (data: Route[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  editProduct(row: any) {
    this.dialog.open(AddEditRoutesComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value == 'actualizar') {
        this.getAllProducts();
      }
    });
  }
  deleteProduct(id: number) {
    this.api.delete(id).subscribe({
      next: (data) => {
        this.snackBar.open("The Route with ID " + id + " was removed successfully", "Ok", { duration: 3000 });
        this.getAllProducts();
      },
      error: () => {
        this.snackBar.open("An error occurred while removing Route ID " + id, "Ok", { duration: 3000 });
      }
    });
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}