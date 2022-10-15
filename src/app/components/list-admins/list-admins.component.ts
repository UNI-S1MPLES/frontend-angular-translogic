import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.scss']
})
export class ListAdminsComponent implements OnInit {

  constructor() { }
  title = 'myTranslogic';
  sideBarOpen = true;

  ngOnInit(): void {
  }
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}