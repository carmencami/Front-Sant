import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

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
    email: ['', [Validators.required, Validators.minLength(minInputLength)]],
    password: ['', [Validators.required, Validators.minLength(minInputLength)]]
    });
}

login() {
    const user = this.formGroup.value;
    console.log(user);
    this.loginService
    .login(user.email, user.password)
    .subscribe(
        (data) => {
        if (!!data) {
            sessionStorage.setItem('user_id', JSON.stringify(data.user_id));
            sessionStorage.setItem('username', JSON.stringify(data.username));
            sessionStorage.setItem('email', JSON.stringify(data.email));
            sessionStorage.setItem('password', JSON.stringify(data.password));
            console.log('################################')
            console.log(sessionStorage.getItem('password'))
            sessionStorage.setItem('fullname', JSON.stringify(data.fullname));
            sessionStorage.setItem('deposit', JSON.stringify(data.deposit));
            console.log("Logged Succesfully")
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