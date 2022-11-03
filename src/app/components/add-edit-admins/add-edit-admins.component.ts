import { Admin } from './../../models/admin';
import { AdminService } from './../../services/admin.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';  // Mensaje de alerta

@Component({
  selector: 'app-add-edit-admins',
  templateUrl: './add-edit-admins.component.html',
  styleUrls: ['./add-edit-admins.component.scss']
})
export class AddEditAdminsComponent implements OnInit {

  myForm!: FormGroup; // Received data of the form (angular reactive form)
  actionBtn: string = "Agregar"; // Save or Update

  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    private dialogRef: MatDialogRef<AddEditAdminsComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id: [''],
      names: ['', Validators.required],
      surnames: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      nickname: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.myForm.controls['names'].setValue(this.editData.names);
      this.myForm.controls['surnames'].setValue(this.editData.surnames);
      this.myForm.controls['email'].setValue(this.editData.email);
      this.myForm.controls['phone'].setValue(this.editData.phone);
      this.myForm.controls['nickname'].setValue(this.editData.nickname);
      this.myForm.controls['password'].setValue(this.editData.password);
    }
  }

  addProduct(): void {
    if (!this.editData) { // Si no se ha recibido informacion para editar
      if (this.myForm.valid) { // Save
        this.service.add(this.myForm.value).subscribe({
          next: (data) => {
            this.snackBar.open("Admin was added successfully", "Ok", { duration: 3000 });
            this.myForm.reset();
            this.dialogRef.close('agregar');
          },
          error: () => {
            this.snackBar.open("An error occurred while adding the administrator", "Ok", { duration: 3000 });
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
        this.snackBar.open("The ID Administrator" + this.editData.id + " was updated successfully", "Ok", { duration: 3000 });
        this.myForm.reset();
        this.dialogRef.close('actualizar');
      },
      error: (varError) => {
        this.snackBar.open("An error occurred while updating the administrator" + this.editData.id, "Ok", { duration: 3000 });
      }
    });
  }
}