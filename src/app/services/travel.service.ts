import { Travel } from './../models/travel';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';
import { Admin } from '../models/admin';
import { Driver } from '../models/driver';
import { Vehicle } from '../models/vehicle';
import { Route } from '../models/route';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  resourcePath: string = environment.serverJSON + environment.resourceTravels;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Travel[]>(this.resourcePath + "/info/");
  }
  getAbout(id: number) {
    return this.http.get<Travel>(this.resourcePath + "/info/" + id.toString());
  }
  add(data: Travel) {
    return this.http.post<Travel>(this.resourcePath, data);
  }
  update(data: Travel, id: number) {
    return this.http.put<Travel>(this.resourcePath + id, data);
  }
  delete(id: number) {
    return this.http.delete<Travel>(this.resourcePath + id);
  }
  getListOfAdmins(id: number) {
    return this.http.get<Admin[]>(this.resourcePath + "/admin/" + id.toString());
  }
  getListOfDrivers(id: number) {
    return this.http.get<Driver[]>(this.resourcePath + "/driver/" + id.toString());
  }
  getListOfVehicles(id: number) {
    return this.http.get<Vehicle[]>(this.resourcePath + "/vehicle/" + id.toString());
  }
  getListOfRoutes(id: number) {
    return this.http.get<Route[]>(this.resourcePath + "/route/" + id.toString());
  }
}