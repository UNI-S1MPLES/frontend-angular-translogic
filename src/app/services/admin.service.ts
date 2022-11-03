import { Route } from './../models/route';
import { Travel } from './../models/travel';
import { Driver } from './../models/driver';
import { Group } from './../models/group';
import { environment } from './../../environments/environment';
import { Admin } from './../models/admin';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  resourcePath: string = environment.serverJSON + environment.resourceAdmins;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Admin[]>(this.resourcePath + "/info");
  }
  getAbout(id: number) {
    return this.http.get<Admin>(this.resourcePath + "/id/" + id.toString());
  }
  add(admin: Admin) {
    return this.http.post<Admin>(this.resourcePath, admin);
  }
  update(data: Admin, id: number) {
    return this.http.put<Admin>(this.resourcePath + "/id/" + id.toString(), data);
  }
  delete(id: number) {
    return this.http.delete<Admin>(this.resourcePath + "/id/" + id.toString());
  }

  // Lists of administrator (byId)
  getListOfGroups(id: number) {
    return this.http.get<Group[]>(this.resourcePath + "/groups/" + id.toString());
  }
  getListOfDrivers(id: number) {
    return this.http.get<Driver[]>(this.resourcePath + "/drivers/" + id.toString());
  }
  getListOfTravels(id: number) {
    return this.http.get<Travel[]>(this.resourcePath + "/travels/" + id.toString());
  }
  getListOfRoutes(id: number) {
    return this.http.get<Route[]>(this.resourcePath + "/routes/" + id.toString());
  }
}