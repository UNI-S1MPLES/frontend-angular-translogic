import { Group } from './../models/group';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Admin } from '../models/admin';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  resourcePath: string = environment.serverJSON + environment.resourceGroups;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Group[]>(this.resourcePath + "/info");
  }
  getAbout(id: number) {
    return this.http.get<Group>(this.resourcePath + "/info/" + id.toString());
  }
  add(group: Group) {
    return this.http.post<Group>(this.resourcePath, group);
  }
  update(data: Group, id: number) {
    return this.http.put<Group>(this.resourcePath + "/" + id.toString(), data);
  }
  delete(id: number) {
    return this.http.delete<Group>(this.resourcePath + "/" + id.toString());
  }
  getListOfAdmins(id: number) {
    return this.http.get<Admin[]>(this.resourcePath + "/admin/" + id.toString());
  }

  getListOfDrivers(id: number) {
    return this.http.get<Driver[]>(this.resourcePath + "/drivers/" + id.toString());
  }
}
