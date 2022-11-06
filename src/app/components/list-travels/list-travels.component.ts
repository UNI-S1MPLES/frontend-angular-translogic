import { Travel } from './../../models/travel';
import { TravelService } from './../../services/travel.service';
import { AddEditTravelsComponent } from './../add-edit-travels/add-edit-travels.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Cuadro de dialogo
import { MatTableDataSource } from '@angular/material/table'; // Table
import { MatSort } from '@angular/material/sort'; // Table
import { MatPaginator } from '@angular/material/paginator'; // Table
import { MatSnackBar } from '@angular/material/snack-bar'; // Mensaje de alerta
import { AdditionalTravelsAdminComponent } from '../additional-travels/additional-travels-admin/additional-travels-admin.component';
import { AdditionalTravelsRouteComponent } from '../additional-travels/additional-travels-route/additional-travels-route.component';
import { AdditionalTravelsVehicleComponent } from '../additional-travels/additional-travels-vehicle/additional-travels-vehicle.component';
import { AdditionalTravelsDriverComponent } from '../additional-travels/additional-travels-driver/additional-travels-driver.component';

@Component({
  selector: 'app-list-travels',
  templateUrl: './list-travels.component.html',
  styleUrls: ['./list-travels.component.scss']
})
export class ListTravelsComponent implements OnInit {

  title = 'myTranslogic';
  sideBarOpen = true;

  dataSource = new MatTableDataSource<Travel>();
  displayedColumns: string[] = ['id', 'dateOfStart', 'dateOfEnd', 'duration', 'state', 'administrator', 'driver', 'vehicle', 'route', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: TravelService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAll();
  }
  openDialog() {
    this.dialog.open(AddEditTravelsComponent, {
      width: '50%'
    }).afterClosed().subscribe(value => {
      if (value == 'agregar') {
        this.getAll();
      }
    });
  }

  getAll() {
    this.api.get().subscribe(
      (data: Travel[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  getAdmin(row: any) {
    this.dialog.open(AdditionalTravelsAdminComponent, { width: '50%', data: row });
  }
  getDriver(row: any) {
    this.dialog.open(AdditionalTravelsDriverComponent, { width: '50%', data: row });
  }
  getVehicle(row: any) {
    this.dialog.open(AdditionalTravelsVehicleComponent, { width: '50%', data: row });
  }
  getRoute(row: any) {
    this.dialog.open(AdditionalTravelsRouteComponent, { width: '50%', data: row });
  }
  edit(row: any) {
    this.dialog.open(AddEditTravelsComponent, {
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
        this.snackBar.open("The Travel with ID " + id + " was removed successfully", "Ok", { duration: 3000 });
        this.getAll();
      },
      error: () => {
        this.snackBar.open("An error occurred while removing Travel ID " + id, "Ok", { duration: 3000 });
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