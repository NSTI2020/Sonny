import { NgModule } from "@angular/core";

import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/Checkbox'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
//import { MatDatepicker } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';




//
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';





@NgModule({
    imports: [
        MatTabsModule,
        MatExpansionModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
       // MatDatepicker,
        MatSelectModule,
        MatSnackBarModule,
        FormsModule,
        MatTooltipModule,
                        


    ],
    exports: [
        MatTabsModule,
        MatExpansionModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatDialogModule,
        //MatDatepicker,
        MatSelectModule,
        MatSnackBarModule,
        FormsModule,
        MatTooltipModule
        


    ]
})

export class MaterialModule { }
