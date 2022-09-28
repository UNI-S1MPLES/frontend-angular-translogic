// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// PAGINA
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TravelsComponent } from './components/travels/travels.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { AdminsComponent } from './components/admins/admins.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';

import { AddEditDriverComponent } from './components/add-edit-drivers/add-edit-driver.component';

const routes: Routes = [
  // RUTAS PRINCIPALES
  { path: "register", component:RegisterComponent }, // Register
  { path: "", component:LoginComponent }, // Login
  { path: "home", component:HomeComponent },
  { path: "travels", component:TravelsComponent },
  { path: "drivers", component:DriversComponent },
  { path: "admins", component:AdminsComponent },
  { path: "faq", component:FaqComponent },
  { path: "contact", component:ContactComponent },
  { path: "error-404", component:Error404Component },
  // RUTAS EXTRAS
  { path: "drivers-add-edit", component:AddEditDriverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }