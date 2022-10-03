import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-add-edit-drivers',
  templateUrl: './add-edit-driver.component.html',
  styleUrls: ['./add-edit-driver.component.css']
})
export class AddEditDriverComponent implements OnInit {

  myForm!: FormGroup; // Conjunto de datos visuales

  constructor(private formBuilder:FormBuilder, private driverService:DriverService, private router:Router) { }

  ngOnInit(): void {
    this.initReactiveForm();
  }

  initReactiveForm(): void {
    this.myForm = this.formBuilder.group( {
      id: [""],
      name: ["", [Validators.required,Validators.maxLength(30)]],
      email: ["", [Validators.required,Validators.email]],
      age: [0,Validators.required]
    } );
  }

  saveDriver() {
    const tempDriver: Driver = {
      id: 0,
      name: this.myForm.get("name")!.value, // (!) = myForm puede retornar valor NULL
      email: this.myForm.get("email")!.value,
      age: this.myForm.get("age")!.value
    }
    this.driverService.add(tempDriver).subscribe({
      next: (data) => {        
        this.router.navigate(["/drivers"]);
      },
      error: (varError) => {
        console.log(varError);
      }
    })
  }
}
