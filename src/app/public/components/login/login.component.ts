import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login.model';
import { Router } from '@angular/router';
import { DataUserInterface } from 'src/app/private/tabla/models/dataUser.model';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    showError: boolean = false;
public formGroup!: FormGroup;

@Output() emitterSpinner = new EventEmitter<boolean>()
@Output() emitterLogin = new EventEmitter<boolean>()

constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router    ) { }

ngOnInit(): void {
    this.buildForm()
}

private buildForm(){
    const minInputLength = 4;
    
    this.formGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(minInputLength)]],
    password: ['', [Validators.required, Validators.minLength(minInputLength)]]
    });
}

login() {
    const user = this.formGroup.value;
    console.log(user);
    this.loginService
    .login(user.username, user.password)
    .subscribe(
        (data) => {
        if (!!data) {
            const userData : DataUserInterface = {
                userToken: data.userToken , fullname: data.fullname, balance: data.balance
            }
            localStorage.setItem(
                "userlogin",JSON.stringify(userData)
            )
            this.emitterSpinner.emit(true)
            console.log("Before timeout")
            setTimeout(this.navigateToTabla, 1500, this.emitterLogin, this.emitterSpinner, this.router);    
        }else{
            this.showError = true;
            console.log("User not found")
        }
        },
        (err) => {
        this.handleError(err);
        }
    );
}

handleError(error: any) {
    if (error.status === 500) {
    console.log(error)
    }
}

navigateToRegister(){
    this.emitterLogin.emit(false)
}

navigateToTabla(emitterLogin: EventEmitter<boolean>, emitterSpinner: EventEmitter<boolean>, router: Router){  
    emitterLogin.emit(false) 
    emitterSpinner.emit(false) 
    router.navigate(['/private'])
    console.log("Waiting...TimeOut")    
}
}