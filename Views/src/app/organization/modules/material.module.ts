import { NgModule } from "@angular/core";

import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    imports: [
        MatTabsModule,
        MatExpansionModule,
        MatIconModule,

    ],
    exports: [
        MatTabsModule,
        MatExpansionModule,
        MatIconModule,


    ]
})

export class MaterialModule { }
