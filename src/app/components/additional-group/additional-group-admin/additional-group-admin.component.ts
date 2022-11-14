import { GroupService } from './../../../services/group.service';
import { DriverService } from './../../../services/driver.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-additional-group-admin',
  templateUrl: './additional-group-admin.component.html',
  styleUrls: ['./additional-group-admin.component.scss']
})
export class AdditionalGroupAdminComponent implements OnInit {

  GroupNameAndSurname: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'names', 'surnames','email','phone', 'nickname'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public group: any, private api: GroupService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllAdmins();
    this.GroupNameAndSurname = this.group.id;
  }

  getAllAdmins() {
    this.api.getListOfAdmins(this.group.id).subscribe(
      (data: Admin[]) => {
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