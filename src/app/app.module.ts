// ---------------- [ Angular ] ----------------
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestsComponent } from './components/tests/tests.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
// ---------------- [ Components ] ----------------
// Sidebar Components
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';
// Lists
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { ListDriversComponent } from './components/list-drivers/list-drivers.component';
import { ListTravelsComponent } from './components/list-travels/list-travels.component';
import { ListRoutesComponent } from './components/list-routes/list-routes.component';
import { ListTramosComponent } from './components/list-tramos/list-tramos.component';
import { ListVehiclesComponent } from './components/list-vehicles/list-vehicles.component';
// Add & Edit
import { AddEditAdminsComponent } from './components/add-edit-admins/add-edit-admins.component';
import { AddEditGroupsComponent } from './components/add-edit-groups/add-edit-groups.component';
import { AddEditDriversComponent } from './components/add-edit-drivers/add-edit-drivers.component';
import { AddEditTravelsComponent } from './components/add-edit-travels/add-edit-travels.component';
import { AddEditRoutesComponent } from './components/add-edit-routes/add-edit-routes.component';
import { AddEditTramosComponent } from './components/add-edit-tramos/add-edit-tramos.component';
import { AddEditVehiclesComponent } from './components/add-edit-vehicles/add-edit-vehicles.component';
// Additionals
import { AdditionalAdminsGroupsComponent } from './components/additional-admins/additional-admins-groups/additional-admins-groups.component';
import { AdditionalAdminsDriversComponent } from './components/additional-admins/additional-admins-drivers/additional-admins-drivers.component';
import { AdditionalAdminsTravelsComponent } from './components/additional-admins/additional-admins-travels/additional-admins-travels.component';
import { AdditionalAdminsRoutesComponent } from './components/additional-admins/additional-admins-routes/additional-admins-routes.component';
import { AdditionalGroupAdminComponent } from './components/additional-group/additional-group-admin/additional-group-admin.component';
import { AdditionalGroupDriversComponent } from './components/additional-group/additional-group-drivers/additional-group-drivers.component';
import { AdditionalDriversAdminComponent } from './components/additional-drivers/additional-drivers-admin/additional-drivers-admin.component';
import { AdditionalDriversGroupComponent } from './components/additional-drivers/additional-drivers-group/additional-drivers-group.component';
import { AdditionalTravelsAdminComponent } from './components/additional-travels/additional-travels-admin/additional-travels-admin.component';
import { AdditionalTravelsDriverComponent } from './components/additional-travels/additional-travels-driver/additional-travels-driver.component';
import { AdditionalTravelsVehicleComponent } from './components/additional-travels/additional-travels-vehicle/additional-travels-vehicle.component';
import { AdditionalTravelsRouteComponent } from './components/additional-travels/additional-travels-route/additional-travels-route.component';
import { AdditionalVehiclesTravelsComponent } from './components/additional-vehicles/additional-vehicles-travels/additional-vehicles-travels.component';
import { AdditionalRoutesAdminComponent } from './components/additional-routes/additional-routes-admin/additional-routes-admin.component';
import { AdditionalRoutesTramosComponent } from './components/additional-routes/additional-routes-tramos/additional-routes-tramos.component';
import { AdditionalTramosRoutesComponent } from './components/additional-tramos/additional-tramos-routes/additional-tramos-routes.component';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
@NgModule({
  declarations: [
    // ---------------- [ Angular ] ----------------
    AppComponent,
    TestsComponent,
    // ---------------- [ Components ] ----------------
    // Sidebar Components
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    FaqComponent,
    ContactComponent,
    Error404Component,
    // Lists
    ListAdminsComponent,
    ListGroupsComponent,
    ListDriversComponent,
    ListTravelsComponent,
    ListRoutesComponent,
    ListTramosComponent,
    ListVehiclesComponent,
    // Add & Edit
    AddEditAdminsComponent,
    AddEditGroupsComponent,
    AddEditDriversComponent,
    AddEditTravelsComponent,
    AddEditRoutesComponent,
    AddEditTramosComponent,
    AddEditVehiclesComponent,
    // Additionals
    AdditionalAdminsGroupsComponent,
    AdditionalAdminsDriversComponent,
    AdditionalAdminsTravelsComponent,
    AdditionalAdminsRoutesComponent,
    AdditionalGroupAdminComponent,
    AdditionalGroupDriversComponent,
    AdditionalDriversAdminComponent,
    AdditionalDriversGroupComponent,
    AdditionalTravelsAdminComponent,
    AdditionalTravelsDriverComponent,
    AdditionalTravelsVehicleComponent,
    AdditionalTravelsRouteComponent,
    AdditionalVehiclesTravelsComponent,
    AdditionalRoutesAdminComponent,
    AdditionalRoutesTramosComponent,
    AdditionalTramosRoutesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatOptionModule,
    // ---------------- [ Angular Material ] ----------------
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
