import { Admin } from './../models/admin';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}
  
  get() {
    return this.http.get<Admin[]>("http://localhost:3000/listAdmins");
  }
  getAbout(id: number) {
    return this.http.get<Admin>("http://localhost:3000/listAdmins" + "/" + id.toString());
  }
  add(admin: Admin) {
    return this.http.post<Admin>("http://localhost:3000/listAdmins", admin);
  }
  update(admin: Admin) {
    return this.http.put<Admin>("http://localhost:3000/listAdmins" + "/" + admin.id.toString(), admin);
  }
  delete(id: number) {
    return this.http.delete<Admin>("http://localhost:3000/listAdmins" + "/" + id.toString());
  }
}
