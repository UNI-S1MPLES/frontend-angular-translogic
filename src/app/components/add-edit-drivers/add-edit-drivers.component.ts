import { DriverService } from './../../services/driver.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';  // Mensaje de alerta

@Component({
  selector: 'app-add-edit-drivers',
  templateUrl: './add-edit-drivers.component.html',
  styleUrls: ['./add-edit-drivers.component.scss']
})
export class AddEditDriversComponent implements OnInit {

  estados = ["Activo", "Inactivo"]; // Radio button options
  myForm!: FormGroup; // Received data of the form (angular reactive form)
  actionBtn: string = "Agregar"; // Save or Update

  constructor(
    private formBuilder: FormBuilder,
    private service: DriverService,
    private dialogRef: MatDialogRef<AddEditDriversComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id: [''],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      estado: ['', Validators.required],
      localizacion: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.myForm.controls['nombres'].setValue(this.editData.nombres);
      this.myForm.controls['apellidos'].setValue(this.editData.apellidos);
      this.myForm.controls['fechaIngreso'].setValue(this.editData.fechaIngreso);
      this.myForm.controls['fechaNacimiento'].setValue(this.editData.fechaNacimiento);
      this.myForm.controls['estado'].setValue(this.editData.estado);
      this.myForm.controls['localizacion'].setValue(this.editData.localizacion);
    }
  }

  addProduct(): void {
    if (!this.editData) { // Si no se ha recibido informacion para editar
      if(this.myForm.valid) { // Save
        this.service.add(this.myForm.value).subscribe({
          next: (data) => {
            this.snackBar.open("El conductor fue agregado correctamente", "Ok", { duration: 3000 });
            this.myForm.reset();
            this.dialogRef.close('agregar');
          },
          error: () => {
            this.snackBar.open("Ocurrió un error al agregar el conductor", "Ok", { duration: 3000 });
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
        this.snackBar.open("El conductor de ID " + this.editData.id + " fue actualizado correctamente", "Ok", { duration: 3000 });
        this.myForm.reset();
        this.dialogRef.close('actualizar');
      },
      error: (varError) => {
        this.snackBar.open("Ocurrió un error al actualizar el conductor de ID " + this.editData.id, "Ok", { duration: 3000 });
      }
    });
  }
}