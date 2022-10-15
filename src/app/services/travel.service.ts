import { Travel } from './../models/travel';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Travel[]>("http://localhost:3000/listTravels/");
  }
  add(data: Travel) {
    return this.http.post<Travel>("http://localhost:3000/listTravels/", data);
  }
  update(data: Travel, id: number) {
    return this.http.put<Travel>("http://localhost:3000/listTravels/" + id, data);
  }
  delete(id: number) {
    return this.http.delete<Travel>("http://localhost:3000/listTravels/" + id);
  }
}