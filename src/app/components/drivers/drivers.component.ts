import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  driver: Driver[] = []; // Areglo para llenarlo con la lista de drivers ya llena
  dataSource = new MatTableDataSource<Driver>();
  displayedColumns: string[] = ["id", "name", "email", "age"];

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers(): void {
    this.driverService.get().subscribe(
      (data:Driver[]) => { // Recoge la informacion de 'db.json'
        this.dataSource = new MatTableDataSource(data); // La usa para llenar 'dataSource'
      }
    );
  }

  applyFilter(event: Event) {
    let filtro: string = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
  
}