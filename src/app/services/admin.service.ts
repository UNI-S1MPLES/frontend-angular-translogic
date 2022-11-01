import { environment } from './../../environments/environment';
import { Admin } from './../models/admin';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  resourcePath: string = environment.serverJSON+environment.resourceAdmins;
  constructor(private http: HttpClient) {}
  
  get() {
    return this.http.get<Admin[]>(this.resourcePath);
  }
  getAbout(id: number) {
    return this.http.get<Admin>(this.resourcePath + "/" + id.toString());
  }
  add(admin: Admin) {
    return this.http.post<Admin>(this.resourcePath, admin);
  }
  update(data: Admin, id: number) {
    return this.http.put<Admin>(this.resourcePath + "/" + id.toString(), data);
  }
  delete(id: number) {
    return this.http.delete<Admin>(this.resourcePath + "/" + id.toString());
  }
}
