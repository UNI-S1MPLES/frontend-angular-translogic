import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; // PARA FORMULARIOS (TABLAS)
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListdriversComponent } from './components/listdrivers/listdrivers.component';
import { AddEditDriverComponent } from './components/add-edit-drivers/add-edit-driver.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component'; // PARA JSON

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListdriversComponent,
    AddEditDriverComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
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
