import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ListTravelsComponent } from './components/list-travels/list-travels.component';
import { ListTramosComponent } from './components/list-tramos/list-tramos.component';
import { ListDriversComponent } from './components/list-drivers/list-drivers.component';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';
import { TestsComponent } from './components/tests/tests.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "travels", component: ListTravelsComponent },
  { path: "tramos", component: ListTramosComponent },
  { path: "drivers", component: ListDriversComponent },
  { path: "admins", component: ListAdminsComponent },
  { path: "faq", component: FaqComponent },
  { path: "contact", component: ContactComponent },
  { path: "error404", component: Error404Component },
  { path: "tests", component: TestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }