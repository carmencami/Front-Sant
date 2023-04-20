
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TablaRoutingModule } from './tabla-routing.module';
import { MaterialModule } from 'src/app/angular-material/material.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { ModalBuyComponent } from './components/modalbuy/modalbuy.component';

@NgModule({
declarations: [TablaComponent
    
],
imports: [
    CommonModule,
    TablaRoutingModule,
    MaterialModule,
    SharedModule,
    // ModalBuyComponent,
    
    
],
exports:[

]

})
export class TablaModule { }
