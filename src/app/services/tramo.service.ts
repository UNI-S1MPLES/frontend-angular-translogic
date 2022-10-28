import { Tramo } from './../models/tramo';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TramoService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Tramo[]>("http://localhost:3000/listTramos/");
  }
  add(data: Tramo) {
    return this.http.post<Tramo>("http://localhost:3000/listTramos/", data);
  }
  update(data: Tramo, id: number) {
    return this.http.put<Tramo>("http://localhost:3000/listTramos/" + id, data);
  }
  delete(id: number) {
    return this.http.delete<Tramo>("http://localhost:3000/listTramos/" + id);
  }
}
