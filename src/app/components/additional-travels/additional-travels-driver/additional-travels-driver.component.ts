import { TravelService } from './../../../services/travel.service';
import { DriverService } from './../../../services/driver.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';
import { Driver } from 'src/app/models/driver';

@Component({
  selector: 'app-additional-travels-driver',
  templateUrl: './additional-travels-driver.component.html',
  styleUrls: ['./additional-travels-driver.component.scss']
})
export class AdditionalTravelsDriverComponent implements OnInit {

  TravelNameAndSurname: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'names', 'surnames','dateOfJoin','dateOfBirthday', 'state', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public travel: any, private api: TravelService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllDrivers();
    this.TravelNameAndSurname = this.travel.id;
  }
  locate(id: number){

  }
  getAllDrivers() {
    this.api.getListOfDrivers(this.travel.id).subscribe(
      (data: Driver[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}