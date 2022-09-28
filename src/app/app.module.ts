import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; // PARA FORMULARIOS (TABLAS)
import { ListdriversComponent } from './components/listdrivers/listdrivers.component';
import { AddEditDriverComponent } from './components/add-edit-drivers/add-edit-driver.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminsComponent } from './components/admins/admins.component';
import { ViajesComponent } from './components/viajes/viajes.component';
import { FaqComponent } from './components/faq/faq.component';
import { Error404Component } from './components/error404/error404.component'; // PARA JSON

@NgModule({
  declarations: [
    AppComponent,
    ListdriversComponent,
    AddEditDriverComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminsComponent,
    ViajesComponent,
    FaqComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule, // PARA FORMULARIOS (TABLAS)
    HttpClientModule, BrowserAnimationsModule // PARA JSON
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
