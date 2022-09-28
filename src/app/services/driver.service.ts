import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  /*
  drivers: Driver[] = [
    {
      name: "Brian",
      email: "brian@gmail",
      age: 18
    },
    {
      name: "Edward",
      email: "edward@gmail",
      age: 20
    },
    {
      name: "Jesus",
      email: "jesus@gmail",
      age: 18
    },
    {
      name: "Eduardo",
      email: "eduardo@gmail",
      age: 20
    },
  ];
  */

  constructor(private http:HttpClient) { }

  get() {
    return this.http.get<Driver[]>("http://localhost:3000/drivers");
    //return this.drivers.slice(); // Slice(): Devuelve todo el arreglo
  }

  add(driver: Driver) {
    return this.http.post<Driver>("http://localhost:3000/drivers", driver);
    //this.drivers.unshift(driver); // Unshift(juan): Agrega el empleado 'juan' al final de la lista
  }

  update(driver: Driver) {
    return this.http.put<Driver>("http://localhost:3000/drivers" + "/" + driver.id.toString(), driver);
  }

  delete(id: number) {
    return this.http.delete<Driver>("http://localhost:3000/drivers" + "/" + id.toString());
  }
}
