import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditDriverComponent } from './components/add-edit-drivers/add-edit-driver.component';
import { ListdriversComponent } from './components/listdrivers/listdrivers.component';

const routes: Routes = [
  { path: "", component:ListdriversComponent },
  { path: "add", component:AddEditDriverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }