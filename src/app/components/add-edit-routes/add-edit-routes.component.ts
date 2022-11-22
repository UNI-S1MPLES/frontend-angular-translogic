import { AdminService } from './../../services/admin.service';
import { TramoService } from './../../services/tramo.service';
import { RouteService } from './../../services/route.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';  // Mensaje de alerta
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tramo } from 'src/app/models/tramo';
import { Admin } from 'src/app/models/admin';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-edit-routes',
  templateUrl: './add-edit-routes.component.html',
  styleUrls: ['./add-edit-routes.component.scss']
})
export class AddEditRoutesComponent implements OnInit {

  myForm!: FormGroup; // Received data of the form (angular reactive form)
  actionBtn: string = "Agregar"; // Save or Update

  title = 'myTranslogic';
  sideBarOpen = true;
  listAdmins!:Admin[]
  adminSelected!: string

  dataSource = new MatTableDataSource<Tramo>();
  displayedColumns: string[] = ['select', 'id', 'description'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selection = new SelectionModel<any>(true, []);

  constructor(private apiAdmin: AdminService, private apiTramos: TramoService, private formBuilder: FormBuilder, private service: RouteService, private dialogRef: MatDialogRef<AddEditRoutesComponent>, private snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id: [''],
      idAdministrator: ['', Validators.required],
      startPlace: ['', Validators.required],
      endPlace: ['', Validators.required],
      idRoutesTramos: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.myForm.controls['idAdministrator'].setValue(this.editData.idAdministrator);
      this.myForm.controls['startPlace'].setValue(this.editData.startPlace);
      this.myForm.controls['endPlace'].setValue(this.editData.endPlace);
      this.myForm.controls['idRoutesTramos'].setValue(this.editData.idRoutesTramos);
      this.getAll();
    }

    this.cargarAdmins();
  }

  cargarAdmins(){
    this.apiAdmin.get().subscribe(data => {
      this.listAdmins = data
      console.log("Admins cargados",this.listAdmins)
    })
  }
  getAll() {
    this.apiTramos.get().subscribe(
      (data: any[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  addProduct(): void {
    if (!this.editData) { // Si no se ha recibido informacion para editar
      if (this.myForm.valid) { // Save
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
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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