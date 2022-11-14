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
  selector: 'app-additional-group-drivers',
  templateUrl: './additional-group-drivers.component.html',
  styleUrls: ['./additional-group-drivers.component.scss']
})
export class AdditionalGroupDriversComponent implements OnInit {

  groupNameAndSurname: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'names', 'surnames', 'dateOfJoin', 'dateOfBirthday', 'state', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public group: any, private api: GroupService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllDrivers();
    this.groupNameAndSurname = this.group.id;
  }

  getAllDrivers() {
    this.api.getListOfDrivers(this.group.id).subscribe(
      (data: Driver[]) => {
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