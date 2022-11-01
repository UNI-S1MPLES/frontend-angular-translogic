import { Tramo } from './../models/tramo';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TramoService {

  resourcePath: string = environment.serverJSON+environment.resourceTramos;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Tramo[]>(this.resourcePath);
  }
  getAbout(id: number) {
    return this.http.get<Tramo>(this.resourcePath + "/" + id.toString());
  }
  add(data: Tramo) {
    return this.http.post<Tramo>(this.resourcePath, data);
  }
  update(data: Tramo, id: number) {
    return this.http.put<Tramo>(this.resourcePath + id.toString(), data);
  }
  delete(id: number) {
    return this.http.delete<Tramo>(this.resourcePath + id.toString());
  }
}
