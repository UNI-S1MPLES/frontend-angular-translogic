import { AdditionalTravelsAdminComponent } from './../additional-travels/additional-travels-admin/additional-travels-admin.component';
import { Driver } from './../../models/driver';
import { DriverService } from './../../services/driver.service';
import { AddEditDriversComponent } from './../add-edit-drivers/add-edit-drivers.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Cuadro de dialogo
import { MatTableDataSource } from '@angular/material/table'; // Table
import { MatSort } from '@angular/material/sort'; // Table
import { MatPaginator } from '@angular/material/paginator'; // Table
import { MatSnackBar } from '@angular/material/snack-bar'; // Mensaje de alerta
import { AdditionalDriversAdminComponent } from '../additional-drivers/additional-drivers-admin/additional-drivers-admin.component';
import { AdditionalDriversGroupComponent } from '../additional-drivers/additional-drivers-group/additional-drivers-group.component';
import { AdditionalDriversTravelsComponent } from '../additional-drivers/additional-drivers-travels/additional-drivers-travels.component';
@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.scss']
})
export class ListDriversComponent implements OnInit {

  title = 'myTranslogic';
  sideBarOpen = true;

  dataSource = new MatTableDataSource<Driver>();
  displayedColumns: string[] = ['id', 'names', 'surnames', 'dateOfJoin', 'dateOfBirthday', 'state', 'administrator', 'group', 'travels', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: DriverService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAll();
  }
  openDialog() {
    this.dialog.open(AddEditDriversComponent, {
      width: '50%'
    }).afterClosed().subscribe(value => {
      if (value == 'agregar') {
        this.getAll();
      }
    });
  }

  getAll() {
    this.api.get().subscribe(
      (data: Driver[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  getAdmin(row: any) {
    this.dialog.open(AdditionalDriversAdminComponent, { width: '50%', data: row });
  }
  getGroup(row: any) {
    this.dialog.open(AdditionalDriversGroupComponent, { width: '50%', data: row });
  }
  getTravels(row: any) {
    this.dialog.open(AdditionalDriversTravelsComponent, { width: '50%', data: row });
  }
  edit(row: any) {
    this.dialog.open(AddEditDriversComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value == 'actualizar') {
        this.getAll();
      }
    });
  }
  delete(id: number) {
    this.api.delete(id).subscribe({
      next: (data) => {
        this.snackBar.open("The Driver with ID " + id + " was removed successfully", "Ok", { duration: 3000 });
        this.getAll();
      },
      error: () => {
        this.snackBar.open("An error occurred while removing Driver ID " + id, "Ok", { duration: 3000 });
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