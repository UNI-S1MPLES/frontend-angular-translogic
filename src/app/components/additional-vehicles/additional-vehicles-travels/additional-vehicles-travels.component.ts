import { VehicleService } from './../../../services/vehicle.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Travel } from 'src/app/models/travel';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-additional-vehicles-travels',
  templateUrl: './additional-vehicles-travels.component.html',
  styleUrls: ['./additional-vehicles-travels.component.scss']
})
export class AdditionalVehiclesTravelsComponent implements OnInit {

  vehicleNameAndSurname: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'dateOfStart', 'dateOfEnd', 'duration', 'state', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public vehicle: any, private api: VehicleService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllTravels();
    this.vehicleNameAndSurname = this.vehicle.id;
  }

  getAllTravels() {
    this.api.getListOfTravels(this.vehicle.id).subscribe(
      (data: Travel[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  getVehicle(travel: any) {
    // abrir ventana con el vehiculo usado en el viaje // CREAR CONTROLADOR EN TRAVEL
  }

  locate(id: number) {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}