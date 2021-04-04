import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechinfoComponent } from './technician/information/techinfo/techinfo.component';
import { MaterialModule } from './organization/modules/material.module';
import { DefaultRoutingModule } from './organization/routes/default-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepairComponent } from './technician/repair/repair.component';
import { InfoService } from 'src/app/_services/info.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientEntityService } from 'src/app/_services/clientEntity.Service';
import { ClientCreateComponent } from './organization/components/administrative/client/client-create/client-create.component';
import { ClientDetailsComponent } from './organization/components/administrative/client/client-details/client-details.component';
import { ClientListComponent } from './organization/components/administrative/client/client-list/client-list.component';
import { ClientEditComponent } from './organization/components/administrative/client/client-edit/client-edit.component';
import { NavbarComponent } from './organization/components/navbar/navbar.component';
import { ClientDeleteComponent } from './organization/components/administrative/client/cliente-delete/cliente-delete.component';
import { Navbar2Component } from './organization/components/navbar2/navbar2.component';



@NgModule({
  declarations: [
    AppComponent,
    TechinfoComponent,
    RepairComponent,
    ClientCreateComponent,
    ClientListComponent,
    ClientEditComponent,
    ClientDeleteComponent,
    ClientDetailsComponent,
    NavbarComponent,
    Navbar2Component,
    

  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    MaterialModule,
    DefaultRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
      CommonModule,
    


  ],
  providers: [
  ClientEntityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }