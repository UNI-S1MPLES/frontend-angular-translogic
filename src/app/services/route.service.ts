import { Tramo } from './../models/tramo';
import { Route } from './../models/route';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  resourcePath: string = environment.serverJSON + environment.resourceRoutes;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Route[]>(this.resourcePath);
  }
  getAbout(id: number) {
    return this.http.get<Route>(this.resourcePath + id.toString());
  }
  add(route: Route) {
    return this.http.post<Route>(this.resourcePath, route);
  }
  update(data: Route, id: number) {
    return this.http.put<Route>(this.resourcePath + "/" + id.toString(), data);
  }
  delete(id: number) {
    return this.http.delete<Route>(this.resourcePath + "/" + id.toString());
  }

  getAllTramosByRouteId(id: number) {
    return this.http.get<Tramo[]>(this.resourcePath + "/tramos/" + id.toString());
  }
}
