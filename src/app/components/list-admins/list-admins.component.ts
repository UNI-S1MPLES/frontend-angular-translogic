import { Admin } from './../../models/admin';
import { AdminService } from './../../services/admin.service';
import { AddEditAdminsComponent } from './../add-edit-admins/add-edit-admins.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Cuadro de dialogo
import { MatTableDataSource } from '@angular/material/table'; // Table
import { MatSort } from '@angular/material/sort'; // Table
import { MatPaginator } from '@angular/material/paginator'; // Table
import { MatSnackBar } from '@angular/material/snack-bar'; // Mensaje de alerta

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.scss']
})
export class ListAdminsComponent implements OnInit {

  title = 'myTranslogic';
  sideBarOpen = true;

  dataSource = new MatTableDataSource<Admin>();
  displayedColumns: string[] = ['id', 'names', 'surname', 'email', 'phone', 'username', 'password','actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: AdminService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(AddEditAdminsComponent, {
      width: '50%'
    }).afterClosed().subscribe(value => {
      if (value == 'agregar') {
        this.getAllProducts();
      }
    });
  }

  getAllProducts() {
    this.api.get().subscribe(
      (data: Admin[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  editProduct(row: any) {
    this.dialog.open(AddEditAdminsComponent, {
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
        this.snackBar.open("The administrator with ID " + id + " was removed successfully", "Ok", { duration: 3000 });
        this.getAllProducts();
      },
      error: () => {
        this.snackBar.open("An error occurred while deleting the ID Administrator " + id, "Ok", { duration: 3000 });
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