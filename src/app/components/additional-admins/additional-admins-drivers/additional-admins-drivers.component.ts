import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Driver } from 'src/app/models/driver';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-additional-admins-drivers',
  templateUrl: './additional-admins-drivers.component.html',
  styleUrls: ['./additional-admins-drivers.component.scss']
})
export class AdditionalAdminsDriversComponent implements OnInit {

  adminNameAndSurname: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'names', 'surnames', 'dateOfJoin', 'dateOfBirthday', 'state', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public admin: any, private api: AdminService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllDrivers();
    this.adminNameAndSurname = this.admin.names + " " + this.admin.surnames;
  }

  getAllDrivers() {
    this.api.getListOfDrivers(this.admin.id).subscribe(
      (data: Driver[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  deleteDriver(id: number) {
    this.api.delete(id).subscribe({
      next: (data) => {
        this.snackBar.open("El grupo (ID: " + id + ") fue eliminado correctamente!", "Ok", { duration: 3000 });
        this.getAllDrivers();
      },
      error: () => {
        this.snackBar.open("Ha ocurrido un error. Es posible que el grupo tenga mas de un conductor", "Ok", { duration: 3000 });
      }
    });
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