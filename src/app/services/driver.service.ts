import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  constructor(private http:HttpClient) { }

  get() {
    return this.http.get<Driver[]>("http://localhost:3000/drivers");
  }

  add(driver: Driver) {
    return this.http.post<Driver>("http://localhost:3000/drivers", driver);
  }

  update(driver: Driver) {
    return this.http.put<Driver>("http://localhost:3000/drivers" + "/" + driver.id.toString(), driver);
  }

  delete(id: number) {
    return this.http.delete<Driver>("http://localhost:3000/drivers" + "/" + id.toString());
  }
}
