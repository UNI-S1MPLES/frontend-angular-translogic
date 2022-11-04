import { Group } from './../models/group';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

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
}
