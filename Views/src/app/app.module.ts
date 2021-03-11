import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechinfoComponent } from './technician/information/techinfo/techinfo.component';
import { MaterialModule } from './organization/modules/material.module';
import { DefaultRoutingModule } from './organization/routes/default-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepairComponent } from './technician/repair/repair.component';
import { InfoService } from 'src/app/_services/info.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TechinfoComponent,
    RepairComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DefaultRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
