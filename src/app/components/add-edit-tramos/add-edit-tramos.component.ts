import { TramoService } from './../../services/tramo.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';  // Mensaje de alerta

@Component({
  selector: 'app-add-edit-tramos',
  templateUrl: './add-edit-tramos.component.html',
  styleUrls: ['./add-edit-tramos.component.scss']
})
export class AddEditTramosComponent implements OnInit {

  myForm!: FormGroup; // Received data of the form (angular reactive form)
  actionBtn: string = "Agregar"; // Save or Update

  constructor(
    private formBuilder: FormBuilder,
    private service: TramoService,
    private dialogRef: MatDialogRef<AddEditTramosComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id: [''],
      startPlace: ['', Validators.required],
      endPlace: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.myForm.controls['startPlace'].setValue(this.editData.startPlace);
      this.myForm.controls['endPlace'].setValue(this.editData.endPlace);
    }
  }

  addProduct(): void {
    if (!this.editData) { // Si no se ha recibido informacion para editar
      if(this.myForm.valid) { // Save
        this.service.add(this.myForm.value).subscribe({
          next: (data) => {
            this.snackBar.open("El tramo fue agregado correctamente", "Ok", { duration: 3000 });
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
        this.snackBar.open("El tramo de ID " + this.editData.id + " fue actualizado correctamente", "Ok", { duration: 3000 });
        this.myForm.reset();
        this.dialogRef.close('actualizar');
      },
      error: (varError) => {
        this.snackBar.open("Ocurrió un error al actualizar el tramo de ID " + this.editData.id, "Ok", { duration: 3000 });
      }
    });
  }
}