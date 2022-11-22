import { AdminService } from 'src/app/services/admin.service';
import { GroupService } from 'src/app/services/group.service';
import { DriverService } from './../../services/driver.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';  // Mensaje de alerta
import { Admin } from 'src/app/models/admin';
import { Group } from 'src/app/models/group';


@Component({
  selector: 'app-add-edit-drivers',
  templateUrl: './add-edit-drivers.component.html',
  styleUrls: ['./add-edit-drivers.component.scss']
})
export class AddEditDriversComponent implements OnInit {

  states = ["Activo", "Inactivo"]; // Radio button options
  myForm!: FormGroup; // Received data of the form (angular reactive form)
  actionBtn: string = "Agregar"; // Save or Update
  listAdmins!:Admin[]
  adminSelected!: string;
  listGroups!:Group[]
  groupSelected!: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: DriverService,
    private dialogRef: MatDialogRef<AddEditDriversComponent>,
    private snackBar: MatSnackBar,
    private apiAdmin: AdminService,
    private apiGroup: GroupService,
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id: [''],
      idAdministrator: ['', Validators.required],
      idGroup: ['', Validators.required],
      names: ['', Validators.required],
      surnames: ['', Validators.required],
      dateOfJoin: ['', Validators.required],
      dateOfBirthday: ['', Validators.required],
      state: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.myForm.controls['names'].setValue(this.editData.names);
      this.myForm.controls['surnames'].setValue(this.editData.surnames);
      this.myForm.controls['dateOfJoin'].setValue(this.editData.dateOfJoin);
      this.myForm.controls['dateOfBirthday'].setValue(this.editData.dateOfBirthday);
      this.myForm.controls['state'].setValue(this.editData.state);
      this.myForm.controls['idAdministrator'].setValue(this.editData.adminSelected);
      this.myForm.controls['idGroup'].setValue(this.editData.groupSelected);
    }

    this.cargarAdmins();
    this.cargarGroups();
    this.validacionID();
  }


  cargarAdmins(){
    this.apiAdmin.get().subscribe(data => {
      this.listAdmins = data
      console.log("Admins cargados",this.listAdmins)
    })
  }
  
  validacionID(){
    console.log("Admin id", this.adminSelected)
    console.log("Grupo id", this.groupSelected)
  }
  cargarGroups(){
    this.apiGroup.get().subscribe(data => {
      this.listGroups = data
      console.log("Grupos cargados",this.listGroups)
    })
  }
  addProduct(): void {
    if (!this.editData) { // Si no se ha recibido informacion para editar
      if (this.myForm.valid) { // Save
        this.service.add(this.myForm.value).subscribe({
          next: (data) => {
            this.snackBar.open("Driver was added successfully", "Ok", { duration: 3000 });
            this.myForm.reset();
            this.dialogRef.close('agregar');
          },
          error: () => {
            this.snackBar.open("An error occurred while adding the driver", "Ok", { duration: 3000 });
          }
        });
      }
    }
    else {
      this.updateProduct();
    }
  }
  updateProduct() {
    this.service.update(this.myForm.value, this.editData.id).subscribe({
      next: (data) => {
        this.snackBar.open("The ID Driver" + this.editData.id + " was updated successfully", "Ok", { duration: 3000 });
        this.myForm.reset();
        this.dialogRef.close('actualizar');
      },
      error: (varError) => {
        this.snackBar.open("An error occurred while updating the ID Driver" + this.editData.id, "Ok", { duration: 3000 });
      }
    });
  }
}