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

  states = ["Active", "Inactive"]; // Radio button options
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
      idAdministrator: ['', Validators.required],
      idDriver: ['', Validators.required],
      idTravelsVehicles: ['', Validators.required],
      idRoute: ['', Validators.required],
      dateOfStart: ['', Validators.required],
      dateOfEnd: ['', Validators.required],
      duration: ['', Validators.required],
      state: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.myForm.controls['idAdministrator'].setValue(this.editData.idAdministrator);
      this.myForm.controls['idDriver'].setValue(this.editData.idDriver);
      this.myForm.controls['idTravelsVehicles'].setValue(this.editData.idTravelsVehicles);
      this.myForm.controls['idRoute'].setValue(this.editData.idRoute);
      this.myForm.controls['dateOfStart'].setValue(this.editData.dateOfStart);
      this.myForm.controls['dateOfEnd'].setValue(this.editData.dateOfEnd);
      this.myForm.controls['duration'].setValue(this.editData.duration);
      this.myForm.controls['state'].setValue(this.editData.state);
    }
  }

  addProduct(): void {
    if (!this.editData) { // Si no se ha recibido informacion para editar
      if(this.myForm.valid) { // Save
        this.service.add(this.myForm.value).subscribe({
          next: (data) => {
            this.snackBar.open("Travel was added successfully", "Ok", { duration: 3000 });
            this.myForm.reset();
            this.dialogRef.close('agregar');
          },
          error: () => {
            this.snackBar.open("An error occurred while adding the Travel", "Ok", { duration: 3000 });
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
        this.snackBar.open("The ID Travel" + this.editData.id + " was updated successfully", "Ok", { duration: 3000 });
        this.myForm.reset();
        this.dialogRef.close('actualizar');
      },
      error: (varError) => {
        this.snackBar.open("An error occurred while updating the ID Travel" + this.editData.id, "Ok", { duration: 3000 });
      }
    });
  }
}