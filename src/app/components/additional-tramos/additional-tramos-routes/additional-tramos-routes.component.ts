import { TramoService } from './../../../services/tramo.service';
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
  selector: 'app-additional-tramos-routes',
  templateUrl: './additional-tramos-routes.component.html',
  styleUrls: ['./additional-tramos-routes.component.scss']
})
export class AdditionalTramosRoutesComponent implements OnInit {

  tramoNameAndSurname: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'startPlace', 'endPlace'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public tramo: any, private api: TramoService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllRoutes();
    this.tramoNameAndSurname = this.tramo.id;
  }
  locate(id: number){

  }
  getAllRoutes() {
    this.api.getListOfRoutes(this.tramo.id).subscribe(
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