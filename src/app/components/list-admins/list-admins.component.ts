import { AdditionalAdminsRoutesComponent } from './../additional-admins/additional-admins-routes/additional-admins-routes.component';
import { AdditionalAdminsTravelsComponent } from './../additional-admins/additional-admins-travels/additional-admins-travels.component';
import { AdditionalAdminsDriversComponent } from './../additional-admins/additional-admins-drivers/additional-admins-drivers.component';
import { AdditionalAdminsGroupsComponent } from './../additional-admins/additional-admins-groups/additional-admins-groups.component';
import { Group } from './../../models/group';
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

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'names', 'surnames', 'email', 'phone', 'nickname', 'groups', 'drivers', 'travels', 'routes', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: AdminService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllAdmins();
  }
  openDialog() {
    this.dialog.open(AddEditAdminsComponent, {
      width: '50%'
    }).afterClosed().subscribe(value => {
      if (value == 'agregar') {
        this.getAllAdmins();
      }
    });
  }

  getAllAdmins() {
    this.api.get().subscribe(
      (data: Admin[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  edit(row: any) {
    this.dialog.open(AddEditAdminsComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value == 'actualizar') {
        this.getAllAdmins();
      }
    });
  }
  delete(id: number) {
    this.api.delete(id).subscribe({
      next: (data) => {
        this.snackBar.open("The administrator with ID " + id + " was removed successfully", "Ok", { duration: 3000 });
        this.getAllAdmins();
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

  // Listas de cada administrador
  openDialogListGroups(id: any) {
    this.dialog.open(AdditionalAdminsGroupsComponent, { width: '30%', data: id });
  }
  openDialogListDrivers(id: any) {
    this.dialog.open(AdditionalAdminsDriversComponent, { width: '50%', data: id });
  }
  openDialogListTravels(id: any) {
    this.dialog.open(AdditionalAdminsTravelsComponent, { width: '50%', data: id });
  }
  openDialogListRoutes(id: any) {
    this.dialog.open(AdditionalAdminsRoutesComponent, { width: '40%', data: id });
  }
}