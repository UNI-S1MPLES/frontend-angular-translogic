import { Travel } from './../../models/travel';
import { TravelService } from './../../services/travel.service';
import { AddEditTravelsComponent } from './../add-edit-travels/add-edit-travels.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog'; // Cuadro de dialogo

import { MatTableDataSource } from '@angular/material/table'; // Table
import { MatSort } from '@angular/material/sort'; // Table
import { MatPaginator } from '@angular/material/paginator'; // Table

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  title = 'myTranslogic';
  sideBarOpen = true;
  
  product: Travel[] = [];
  dataSource = new MatTableDataSource<Travel>();
  displayedColumns: string[] = ['id', 'photo', 'name', 'category', 'date', 'freshness', 'price', 'comment', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: TravelService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  openDialog() {
    this.dialog.open(AddEditTravelsComponent, {
      width: '50%'
    }).afterClosed().subscribe(value => {
      if (value == 'save') {
        this.getAllProducts();
      }
    });
  }

  getAllProducts() {
    this.api.get().subscribe(
      (data: Travel[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  editProduct(row: any) {
    this.dialog.open(AddEditTravelsComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value == 'update') {
        this.getAllProducts();
      }
    });
  }
  deleteProduct(id: number) {
    this.api.delete(id).subscribe({
      next: (data) => {
        alert("Producto eliminado correctamente");
        this.getAllProducts();
      },
      error: () => {
        alert("Ocurrio un error al eliminar el producto");
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