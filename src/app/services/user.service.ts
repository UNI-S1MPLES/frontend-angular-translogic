import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  
  get() {
    return this.http.get<User[]>("http://localhost:3000/listAdmins");
  }
  getAbout(id: number) {
    return this.http.get<User>("http://localhost:3000/listAdmins" + "/" + id.toString());
  }
  add(user: User) {
    return this.http.post<User>("http://localhost:3000/listAdmins", user);
  }
  update(user: User) {
    return this.http.put<User>("http://localhost:3000/listAdmins" + "/" + user.id.toString(), user);
  }
  delete(id: number) {
    return this.http.delete<User>("http://localhost:3000/listAdmins" + "/" + id.toString());
  }
}
