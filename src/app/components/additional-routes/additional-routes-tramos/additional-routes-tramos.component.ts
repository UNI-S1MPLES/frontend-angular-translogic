import { Route } from './../../../models/route';
import { RouteService } from './../../../services/route.service';
import { VehicleService } from './../../../services/vehicle.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Travel } from 'src/app/models/travel';
import { AdminService } from 'src/app/services/admin.service';
import { Tramo } from 'src/app/models/tramo';

@Component({
  selector: 'app-additional-routes-tramos',
  templateUrl: './additional-routes-tramos.component.html',
  styleUrls: ['./additional-routes-tramos.component.scss']
})
export class AdditionalRoutesTramosComponent implements OnInit {

  routeNameAndSurname: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'description'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public route: any, private api: RouteService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllTramos();
    this.routeNameAndSurname = this.route.id;
  }

  getAllTramos() {
    this.api.getListOfTramos(this.route.id).subscribe(
      (data: Tramo[]) => {
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