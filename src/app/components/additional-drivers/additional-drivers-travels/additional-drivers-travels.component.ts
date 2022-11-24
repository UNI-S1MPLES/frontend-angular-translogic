import { DriverService } from './../../../services/driver.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-additional-drivers-travels',
  templateUrl: './additional-drivers-travels.component.html',
  styleUrls: ['./additional-drivers-travels.component.scss']
})
export class AdditionalDriversTravelsComponent implements OnInit {

  NameAndSurname: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'dateOfStart' , 'dateOfEnd', 'duration', 'state'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public driver: any, private api: DriverService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllTravels();
    this.NameAndSurname = this.driver.names + " " + this.driver.surnames;
  }

  getAllTravels() {
    this.api.getListOfTravels(this.driver.id).subscribe(
      (data: Travel[]) => {
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