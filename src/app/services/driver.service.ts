import { Group } from 'src/app/models/group';
import { Admin } from './../models/admin';
import { Driver } from './../models/driver';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';
import { Travel } from '../models/travel';

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

  getListOfAdmins(id: number) {
    return this.http.get<Admin[]>(this.resourcePath + "/admin/" + id.toString());
  }

  getListOfGroups(id: number) {
    return this.http.get<Group[]>(this.resourcePath + "/group/" + id.toString());
  }

  getListOfTravels(id: number) {
    return this.http.get<Travel[]>(this.resourcePath + "/travels/" + id.toString());
  }
}
