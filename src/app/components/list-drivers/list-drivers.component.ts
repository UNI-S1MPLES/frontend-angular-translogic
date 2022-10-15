import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.scss']
})
export class ListDriversComponent implements OnInit {

  constructor() { }
  title = 'myTranslogic';
  sideBarOpen = true;

  ngOnInit(): void {
  }
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}