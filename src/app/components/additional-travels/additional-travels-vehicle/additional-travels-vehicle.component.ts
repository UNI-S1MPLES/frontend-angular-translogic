import { Vehicle } from './../../../models/vehicle';
import { TravelService } from './../../../services/travel.service';
import { GroupService } from 'src/app/services/group.service';
import { Group } from './../../../models/group';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Driver } from 'src/app/models/driver';

@Component({
  selector: 'app-additional-travels-vehicle',
  templateUrl: './additional-travels-vehicle.component.html',
  styleUrls: ['./additional-travels-vehicle.component.scss']
})
export class AdditionalTravelsVehicleComponent implements OnInit {

  travelNameAndSurname: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'kmTraveled'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public travel: any, private api: TravelService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllVehicles();
    this.travelNameAndSurname = this.travel.id;
  }

  getAllVehicles() {
    this.api.getListOfVehicles(this.travel.id).subscribe(
      (data: Vehicle[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
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