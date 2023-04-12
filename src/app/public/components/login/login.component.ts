import { LoginService } from '../../user/services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


import {Router} from '@angular/router'


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    email = new FormControl();
    password = new FormControl();
    errorMsg : string | undefined;
    hide = true;
    
    constructor(private loginService : LoginService, private router:Router,
        public dialog: MatDialog) { 
        
    }
    
    login (){
        console.log(this.email.value + ', ' + this.password.value);
        this.loginService
        .getUserbyEmailAndPassword(this.email.value, this.password.value)
        .subscribe(
            (data) => {
                
            if (data.user_id) {
                // Guardar usuario en el session storage??? y cerrar modal
                sessionStorage.setItem('user', JSON.stringify(data));
            this.dialog.closeAll();
            this.router.navigate(['private/tabla']);
            }
            },
            (error) => {
            this.handleError(error);
            }
        );
    }
    
    handleError(error: any) {
        if (error.status === 500) {
          //  Show error message
        this.errorMsg = "El usuario no existe"
        }
    }

    getErrorMessage() {
        if (this.email.hasError('required')) {
        return 'Debes introducir un email';
        }
    
        return this.email.hasError('email') ? 'El email no es válido' : '';
    }

    guardarDatos() {
        this.router.navigate(['private/tabla']);
    }
    openLogin() {
        this.dialog.open(LoginComponent)
    }
    
    ngOnInit(): void {
    }
    
    }
    