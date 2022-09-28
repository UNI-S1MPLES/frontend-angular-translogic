import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditDriverComponent } from './components/add-edit-drivers/add-edit-driver.component';
import { ListdriversComponent } from './components/listdrivers/listdrivers.component';

const routes: Routes = [
  // Principales
  { path: "", component:LoginComponent }, // Login
  { path: "register", component:RegisterComponent }, // Register
  { path: "home", component:HomeComponent },
  { path: "travels", component:HomeComponent },
  { path: "drivers", component:ListdriversComponent },
  { path: "admins", component:ListdriversComponent },
  { path: "faq", component:ListdriversComponent },
  { path: "contact", component:ListdriversComponent },
  // Extras
  { path: "drivers-add-edit", component:AddEditDriverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }