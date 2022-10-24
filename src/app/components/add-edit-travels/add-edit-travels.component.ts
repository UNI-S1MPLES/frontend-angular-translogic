import { TravelService } from './../../services/travel.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';  // Mensaje de alerta

@Component({
  selector: 'app-add-edit-travels',
  templateUrl: './add-edit-travels.component.html',
  styleUrls: ['./add-edit-travels.component.scss']
})
export class AddEditTravelsComponent implements OnInit {

  rutas = ["Habilitada", "Deshabilitada"]; // Radio button options
  myForm!: FormGroup; // Received data of the form (angular reactive form)
  actionBtn: string = "Agregar"; // Save or Update

  constructor(
    private formBuilder: FormBuilder,
    private service: TravelService,
    private dialogRef: MatDialogRef<AddEditTravelsComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id: [''],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      cantTramos: ['', Validators.required],
      fecha: ['', Validators.required],
      conductorId: ['', Validators.required],
      ruta: ['', Validators.required],
      tipoVehiculo: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.myForm.controls['origen'].setValue(this.editData.origen);
      this.myForm.controls['destino'].setValue(this.editData.destino);
      this.myForm.controls['cantTramos'].setValue(this.editData.cantTramos);
      this.myForm.controls['fecha'].setValue(this.editData.fecha);
      this.myForm.controls['conductorId'].setValue(this.editData.conductorId);
      this.myForm.controls['ruta'].setValue(this.editData.ruta);
      this.myForm.controls['tipoVehiculo'].setValue(this.editData.tipoVehiculo);
    }
  }

  addProduct(): void {
    if (!this.editData) { // Si no se ha recibido informacion para editar
      if(this.myForm.valid) { // Save
        this.service.add(this.myForm.value).subscribe({
          next: (data) => {
            this.snackBar.open("El viaje fue agregado correctamente", "Ok", { duration: 3000 });
            this.myForm.reset();
            this.dialogRef.close('agregar');
          },
          error: () => {
            this.snackBar.open("Ocurrió un error al agregar el viaje", "Ok", { duration: 3000 });
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
        this.snackBar.open("El viaje de ID " + this.editData.id + " fue actualizado correctamente", "Ok", { duration: 3000 });
        this.myForm.reset();
        this.dialogRef.close('actualizar');
      },
      error: (varError) => {
        this.snackBar.open("Ocurrió un error al aztualizar el viaje de ID " + this.editData.id, "Ok", { duration: 3000 });
      }
    });
  }
}