
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { PublicRoutingModule } from './public-routing.module';
import { UserModule } from './user/user.module';



@NgModule({
declarations: [
    
],
imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule,
    UserModule,
],
exports:[]

})
export class PublicModule { }
