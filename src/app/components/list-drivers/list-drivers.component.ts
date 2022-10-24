import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.scss']
})
export class ListDriversComponent implements OnInit {

  myForm!: FormGroup;
  datSource = new MatTableDataSource<User>()

  constructor(private api: UserService) { }
  sideBarOpen = true;

  ngOnInit(): void {
    
  }

  verificarEmail(): void {

  }
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}