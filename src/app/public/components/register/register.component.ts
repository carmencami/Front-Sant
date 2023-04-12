import { LoginComponent } from 'src/app/public/components/login/login.component';

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterService } from 'src/app/public/user/services/register.service';


import { HttpClientModule } from '@angular/common/http';

import { FormControl, Validators } from '@angular/forms';


@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
email : FormControl;
password : FormControl;
name : FormControl;
hide = true;

constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<RegisterComponent>,  private registerService : RegisterService) { 

    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
    this.name = new FormControl('', [Validators.required]);
}

register(){
    console.log(this.name.value + ", " + this.email.value + ', ' + this.password.value);
    this.registerService
    .addUser(this.name.value, this.email.value, this.password.value)
    .subscribe(
        (data) => {
            console.log("Usuario creado: " + data)
        },
        (error: any) => {
        this.handleError(error);
        }
    );
}

handleError(error: any) {
    if (error.status === 500) {
      //  Show error message
    
    }
}

ngOnInit(): void {
}
getErrorEmail() {
    if (this.email.hasError('required')) {
    return 'Introduzca su email';
    }

    return this.email.hasError('email') ? 'No es válido el email' : '';
}
getErrorMessage() {
    if (this.name.hasError('required')) {
    return 'Introduzca su nombre';
    }

    return this.email.hasError('name') ? 'No es válido el nombre' : '';
}


}
