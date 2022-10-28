import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Angular
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
// Components
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { ListTravelsComponent } from './components/list-travels/list-travels.component';
import { AddEditAdminsComponent } from './components/add-edit-admins/add-edit-admins.component';
import { AddEditDriversComponent } from './components/add-edit-drivers/add-edit-drivers.component';
import { AddEditTravelsComponent } from './components/add-edit-travels/add-edit-travels.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';
import { FaqComponent } from './components/faq/faq.component';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { ListDriversComponent } from './components/list-drivers/list-drivers.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TestsComponent } from './components/tests/tests.component';
import { ListTramosComponent } from './components/list-tramos/list-tramos.component';
import { AddEditTramosComponent } from './components/add-edit-tramos/add-edit-tramos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    ListTravelsComponent,
    AddEditAdminsComponent,
    AddEditDriversComponent,
    AddEditTravelsComponent,
    ContactComponent,
    Error404Component,
    FaqComponent,
    ListAdminsComponent,
    ListDriversComponent,
    LoginComponent,
    RegisterComponent,
    TestsComponent,
    ListTramosComponent,
    AddEditTramosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
