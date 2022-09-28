import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';

import { ReactiveFormsModule } from '@angular/forms'; // PARA FORMULARIOS (TABLAS)
import { HttpClientModule } from '@angular/common/http'; // PARA JSON

import { HomeComponent } from './components/home/home.component';
import { TravelsComponent } from './components/travels/travels.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { AdminsComponent } from './components/admins/admins.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';

import { AddEditDriverComponent } from './components/add-edit-drivers/add-edit-driver.component';
import { HorariosComponent } from './components/horarios/horarios.component';


@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    HomeComponent,
    TravelsComponent,
    DriversComponent,
    AdminsComponent,
    FaqComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    Error404Component,
    AddEditDriverComponent,
    HorariosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // PARA JSON
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule, // PARA FORMULARIOS (TABLAS)
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
