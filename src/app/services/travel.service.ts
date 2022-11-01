import { Travel } from './../models/travel';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  resourcePath: string = environment.serverJSON+environment.resourceTravels;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Travel[]>(this.resourcePath);
  }
  getAbout(id: number) {
    return this.http.get<Travel>(this.resourcePath + "/" + id.toString());
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
}