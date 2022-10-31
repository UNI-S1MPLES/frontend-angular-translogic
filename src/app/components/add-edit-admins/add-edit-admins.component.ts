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
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id: [''],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      nickname: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.myForm.controls['nombres'].setValue(this.editData.nombres);
      this.myForm.controls['apellidos'].setValue(this.editData.apellidos);
      this.myForm.controls['nickname'].setValue(this.editData.nickname);
    }
  }

  addProduct(): void {
    if (!this.editData) { // Si no se ha recibido informacion para editar
      if(this.myForm.valid) { // Save
        this.service.add(this.myForm.value).subscribe({
          next: (data) => {
            this.snackBar.open("El administrador fue agregado correctamente", "Ok", { duration: 3000 });
            this.myForm.reset();
            this.dialogRef.close('agregar');
          },
          error: () => {
            this.snackBar.open("Ocurrió un error al agregar el administrador", "Ok", { duration: 3000 });
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
        this.snackBar.open("El administrador de ID " + this.editData.id + " fue actualizado correctamente", "Ok", { duration: 3000 });
        this.myForm.reset();
        this.dialogRef.close('actualizar');
      },
      error: (varError) => {
        this.snackBar.open("Ocurrió un error al actualizar el administrador de ID " + this.editData.id, "Ok", { duration: 3000 });
      }
    });
  }
}