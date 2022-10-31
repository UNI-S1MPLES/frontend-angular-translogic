import { Driver } from './../models/driver';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http:HttpClient) {}
  
  get() {
    return this.http.get<Driver[]>("http://localhost:3000/listDrivers");
  }
  getAbout(id: number) {
    return this.http.get<Driver>("http://localhost:3000/listDrivers" + "/" + id.toString());
  }
  add(driver: Driver) {
    return this.http.post<Driver>("http://localhost:3000/listDrivers", driver);
  }
  update(data: Driver, id: number) {
    return this.http.put<Driver>("http://localhost:3000/listDrivers" + "/" + id, data);
  }
  delete(id: number) {
    return this.http.delete<Driver>("http://localhost:3000/listDrivers" + "/" + id.toString());
  }
}
