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
import { Route } from 'src/app/models/route';

@Component({
  selector: 'app-additional-travels-route',
  templateUrl: './additional-travels-route.component.html',
  styleUrls: ['./additional-travels-route.component.scss']
})
export class AdditionalTravelsRouteComponent implements OnInit {

  TravelNameAndSurname: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'startPlace', 'endPlace'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public travel: any, private api: TravelService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllRoutes();
    this.TravelNameAndSurname = this.travel.id;
  }
  locate(id: number){

  }
  getAllRoutes() {
    this.api.getListOfRoutes(this.travel.id).subscribe(
      (data: Route[]) => {
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