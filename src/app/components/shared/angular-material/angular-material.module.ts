import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Navbar, Sisdebar, Menu
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
// Json Server (Fake API)
import { HttpClientModule } from '@angular/common/http';
// Table
import { MatTableModule } from '@angular/material/table'; // Table
import { MatSortModule } from '@angular/material/sort'; // Table
import { MatPaginatorModule } from '@angular/material/paginator'; // Table
// Add, Edit
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Guardar la informacion de un formulario angular
import { MatDialogModule } from '@angular/material/dialog'; // Cuadro de diálogo
import { MatSnackBarModule } from '@angular/material/snack-bar' // Mensaje de alerta
import { MatButtonModule } from '@angular/material/button'; // Botones
import { MatFormFieldModule } from '@angular/material/form-field'; // Diseño al ingreso de datos
import { MatInputModule } from '@angular/material/input'; // Ingreso de datos
import { MatSelectModule } from '@angular/material/select'; // Seleccion de datos
import { MatDatepickerModule } from '@angular/material/datepicker'; // Date Picker
import { MatNativeDateModule } from '@angular/material/core'; // Date Picker
import { MatRadioModule } from '@angular/material/radio'; // Radio Button

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Json Server (Fake API)
    HttpClientModule,
    // Navbar, Sisdebar, Menu
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    // List
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    // Add, Edit
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  exports: [
    CommonModule,
    // Json Server (Fake API)
    HttpClientModule,
    // Navbar, Sisdebar, Menu
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    // List
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    // Add, Edit
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ]
})
export class AngularMaterialModule { }
