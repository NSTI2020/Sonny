import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
//import { TechinfoComponent } from 'src/app/technician/information/techinfo/techinfo.component'

//import { RepairComponent } from "src/app/technician/repair/repair.component";
import { ClientCreateComponent } from '../components/administrative/client/client-create/client-create.component';
import { ClientListComponent } from '../components/administrative/client/client-list/client-list.component';
import { ClientEditComponent } from '../components/administrative/client/client-edit/client-edit.component';


const routes: Routes = [
     {path: 'create', component: ClientCreateComponent},
    //  { path: '', component: RepairComponent },
    // { path: 'info', component: TechinfoComponent },
    { path: '', component: ClientListComponent },
    { path: 'client/:id/edit', component: ClientEditComponent },
    { path: 'newclient', component: ClientCreateComponent },
    { path: 'listclient', component: ClientListComponent }

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
