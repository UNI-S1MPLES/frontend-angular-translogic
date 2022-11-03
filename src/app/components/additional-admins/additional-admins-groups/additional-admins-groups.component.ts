import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Group } from 'src/app/models/group';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-additional-admins-groups',
  templateUrl: './additional-admins-groups.component.html',
  styleUrls: ['./additional-admins-groups.component.scss']
})
export class AdditionalAdminsGroupsComponent implements OnInit {

  adminNameAndSurname: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'sector', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public admin: any, private api: AdminService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllGroups();
    this.adminNameAndSurname = this.admin.names + " " + this.admin.surnames;
  }

  getAllGroups() {
    this.api.getListOfGroups(this.admin.id).subscribe(
      (data: Group[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  deleteProduct(id: number) {
    this.api.delete(id).subscribe({
      next: (data) => {
        this.snackBar.open("El grupo (ID: " + id + ") fue eliminado correctamente!", "Ok", { duration: 3000 });
        this.getAllGroups();
      },
      error: () => {
        this.snackBar.open("Ha ocurrido un error. Es posible que el grupo tenga mas de un conductor", "Ok", { duration: 3000 });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}