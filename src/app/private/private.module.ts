import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { TablaModule } from './tabla/tabla.module';


@NgModule({
declarations: [],
imports: [
    CommonModule,
    PrivateRoutingModule,
    TablaModule
],
exports: [
]
})
export class PrivateModule { }
