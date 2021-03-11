import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TechinfoComponent } from 'src/app/technician/information/techinfo/techinfo.component'
import { RepairComponent } from "src/app/technician/repair/repair.component";


const routes: Routes = [
    { path: '', component: RepairComponent },
    { path: 'info', component: TechinfoComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class DefaultRoutingModule {

}
