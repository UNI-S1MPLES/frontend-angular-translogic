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

  states = ["Active", "Inactive"]; // Radio button options
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
      idAdministrator: ['', Validators.required],
      idGroup: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      dateOfJoin: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      state: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.myForm.controls['idAdministrator'].setValue(this.editData.idAdministrator);
      this.myForm.controls['idGroup'].setValue(this.editData.idGroup);
      this.myForm.controls['name'].setValue(this.editData.name);
      this.myForm.controls['surname'].setValue(this.editData.surname);
      this.myForm.controls['dateOfJoin'].setValue(this.editData.dateOfJoin);
      this.myForm.controls['dateOfBirth'].setValue(this.editData.dateOfBirth);
      this.myForm.controls['state'].setValue(this.editData.state);
    }
  }

  addProduct(): void {
    if (!this.editData) { // Si no se ha recibido informacion para editar
      if(this.myForm.valid) { // Save
        this.service.add(this.myForm.value).subscribe({
          next: (data) => {
            this.snackBar.open("Driver was added successfully", "Ok", { duration: 3000 });
            this.myForm.reset();
            this.dialogRef.close('agregar');
          },
          error: () => {
            this.snackBar.open("An error occurred while adding the Driver", "Ok", { duration: 3000 });
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