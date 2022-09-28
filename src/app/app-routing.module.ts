import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditDriverComponent } from './components/add-edit-drivers/add-edit-driver.component';
import { ListdriversComponent } from './components/listdrivers/listdrivers.component';

const routes: Routes = [
  { path: "", component:LoginComponent },
  { path: "register", component:RegisterComponent },
  { path: "home", component:HomeComponent },
  { path: "drivers-list", component:ListdriversComponent },
  { path: "drivers-add-edit", component:AddEditDriverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }