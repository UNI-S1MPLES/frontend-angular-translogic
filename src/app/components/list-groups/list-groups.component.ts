import { Group } from './../../models/group';
import { GroupService } from './../../services/group.service';
import { AddEditGroupsComponent } from './../add-edit-groups/add-edit-groups.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Cuadro de dialogo
import { MatTableDataSource } from '@angular/material/table'; // Table
import { MatSort } from '@angular/material/sort'; // Table
import { MatPaginator } from '@angular/material/paginator'; // Table
import { MatSnackBar } from '@angular/material/snack-bar'; // Mensaje de alerta
import { AdditionalGroupAdminComponent } from '../additional-group/additional-group-admin/additional-group-admin.component';
import { AdditionalGroupDriversComponent } from '../additional-group/additional-group-drivers/additional-group-drivers.component';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.scss']
})
export class ListGroupsComponent implements OnInit {

  title = 'myTranslogic';
  sideBarOpen = true;

  dataSource = new MatTableDataSource<Group>();
  displayedColumns: string[] = ['id', 'sector', 'administrator', 'drivers', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: GroupService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAll();
  }

  openDialog() {
    this.dialog.open(AddEditGroupsComponent, {
      width: '50%'
    }).afterClosed().subscribe(value => {
      if (value == 'agregar') {
        this.getAll();
      }
    });
  }

  getAll() {
    this.api.get().subscribe(
      (data: Group[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  getAdmin(row: any) {
    this.dialog.open(AdditionalGroupAdminComponent, { width: '50%', data: row });
  }
  getDrivers(row: any) {
    this.dialog.open(AdditionalGroupDriversComponent, { width: '50%', data: row });
  }
  edit(row: any) {
    this.dialog.open(AddEditGroupsComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value == 'actualizar') {
        this.getAll();
      }
    });
  }
  delete(id: number) {
    this.api.delete(id).subscribe({
      next: (data) => {
        this.snackBar.open("The Group with ID " + id + " was removed successfully", "Ok", { duration: 3000 });
        this.getAll();
      },
      error: () => {
        this.snackBar.open("An error occurred while removing Group ID " + id, "Ok", { duration: 3000 });
      }
    });
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}