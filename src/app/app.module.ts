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
import { ListRoutesComponent } from './components/list-routes/list-routes.component';
import { AddEditRoutesComponent } from './components/add-edit-routes/add-edit-routes.component';
import { ListVehiclesComponent } from './components/list-vehicles/list-vehicles.component';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { AddEditVehiclesComponent } from './components/add-edit-vehicles/add-edit-vehicles.component';
import { AddEditGroupsComponent } from './components/add-edit-groups/add-edit-groups.component';
import { AdditionalAdminsGroupsComponent } from './components/additional-admins/additional-admins-groups/additional-admins-groups.component';
import { AdditionalAdminsDriversComponent } from './components/additional-admins/additional-admins-drivers/additional-admins-drivers.component';
import { AdditionalAdminsTravelsComponent } from './components/additional-admins/additional-admins-travels/additional-admins-travels.component';
import { AdditionalAdminsRoutesComponent } from './components/additional-admins/additional-admins-routes/additional-admins-routes.component';
import { AdditionalTramosRoutesComponent } from './components/additional-tramos/additional-tramos-routes/additional-tramos-routes.component';

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
    AddEditTramosComponent,
    ListRoutesComponent,
    AddEditRoutesComponent,
    ListVehiclesComponent,
    ListGroupsComponent,
    AddEditVehiclesComponent,
    AddEditGroupsComponent,
    AdditionalAdminsGroupsComponent,
    AdditionalAdminsDriversComponent,
    AdditionalAdminsTravelsComponent,
    AdditionalAdminsRoutesComponent,
    AdditionalTramosRoutesComponent,
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
