import { Vehicle } from './../models/vehicle';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  resourcePath: string = environment.serverJSON + environment.resourceVehicles;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Vehicle[]>(this.resourcePath + "/info/");
  }
  getAbout(id: number) {
    return this.http.get<Vehicle>(this.resourcePath + "/info/" + id.toString());
  }
  add(data: Vehicle) {
    return this.http.post<Vehicle>(this.resourcePath, data);
  }
  update(data: Vehicle, id: number) {
    return this.http.put<Vehicle>(this.resourcePath + id, data);
  }
  delete(id: number) {
    return this.http.delete<Vehicle>(this.resourcePath + id);
  }
}