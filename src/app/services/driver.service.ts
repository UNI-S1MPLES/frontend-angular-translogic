import { Driver } from './../models/driver';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  resourcePath: string = environment.serverJSON + environment.resourceDrivers;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Driver[]>(this.resourcePath + "/info");
  }
  getAbout(id: number) {
    return this.http.get<Driver>(this.resourcePath + "/info/" + id.toString());
  }
  add(driver: Driver) {
    return this.http.post<Driver>(this.resourcePath, driver);
  }
  update(data: Driver, id: number) {
    return this.http.put<Driver>(this.resourcePath + "/" + id.toString(), data);
  }
  delete(id: number) {
    return this.http.delete<Driver>(this.resourcePath + "/" + id.toString());
  }
}
