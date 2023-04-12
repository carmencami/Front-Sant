
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TablaRoutingModule } from './tabla-routing.module';
import { MaterialModule } from 'src/app/angular-material/material.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
declarations: [TablaComponent
    
],
imports: [
    CommonModule,
    TablaRoutingModule,
    MaterialModule,
    SharedModule
    
    
],
exports:[

]

})
export class TablaModule { }
