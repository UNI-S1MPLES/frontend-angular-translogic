import { RouteService } from './../../services/route.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';  // Mensaje de alerta

@Component({
  selector: 'app-add-edit-routes',
  templateUrl: './add-edit-routes.component.html',
  styleUrls: ['./add-edit-routes.component.scss']
})
export class AddEditRoutesComponent implements OnInit {

  myForm!: FormGroup; // Received data of the form (angular reactive form)
  actionBtn: string = "Agregar"; // Save or Update

  constructor(
    private formBuilder: FormBuilder,
    private service: RouteService,
    private dialogRef: MatDialogRef<AddEditRoutesComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id: [''],
      idAdministrator: ['', Validators.required],
      idRoutesTramos: ['', Validators.required],
      startPlace: ['', Validators.required],
      endPlace: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.myForm.controls['idAdministrator'].setValue(this.editData.idAdministrator);
      this.myForm.controls['idRoutesTramos'].setValue(this.editData.idRoutesTramos);
      this.myForm.controls['startPlace'].setValue(this.editData.startPlace);
      this.myForm.controls['endPlace'].setValue(this.editData.endPlace);
    }
  }

  addProduct(): void {
    if (!this.editData) { // Si no se ha recibido informacion para editar
      if(this.myForm.valid) { // Save
        this.service.add(this.myForm.value).subscribe({
          next: (data) => {
            this.snackBar.open("Route was added successfully", "Ok", { duration: 3000 });
            this.myForm.reset();
            this.dialogRef.close('agregar');
          },
          error: () => {
            this.snackBar.open("An error occurred while adding the Route", "Ok", { duration: 3000 });
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
        this.snackBar.open("The ID Route" + this.editData.id + " was updated successfully", "Ok", { duration: 3000 });
        this.myForm.reset();
        this.dialogRef.close('actualizar');
      },
      error: (varError) => {
        this.snackBar.open("An error occurred while updating the ID Route" + this.editData.id, "Ok", { duration: 3000 });
      }
    });
  }
}