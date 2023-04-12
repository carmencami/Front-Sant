import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { MaterialModule } from '../../angular-material/material.module';
import { RegisterComponent } from '../components/register/register.component';
import { MatDialogRef } from '@angular/material/dialog';


@NgModule({
declarations: [
    LoginComponent,
    RegisterComponent
],
imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    HttpClientModule,
],
exports: [LoginComponent,
RegisterComponent]
})
export class UserModule { }
