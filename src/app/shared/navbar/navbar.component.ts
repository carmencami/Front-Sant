import { UsersService } from 'src/app/public/services/users.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
user_id:any
fullname:string = ""
deposit:number = 1000
formatedDeposit:any


constructor(public dialog: MatDialog, public router: Router,  public usersService:UsersService) {}

ngOnInit(): void {
    this.user_id = sessionStorage.getItem('user_id')
    
    this.usersService
    .updateBalance(this.user_id, this.deposit)
    .subscribe(
        (data) => {
        console.log(data)
        if (!!data) {
            this.deposit = +data.deposit
            this.formatedDeposit =  this.deposit.toLocaleString('es-ES', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
            })
            console.log(typeof data.deposit)
            console.log(this.formatedDeposit)
            this.fullname = data.fullname
        }else{
            console.log("User not found in dashboard")
        }
        },
        (error) => {
        this.handleError(error);
        }
    );
}
getUserData(){
    return JSON.parse( localStorage.getItem("userlogin")!)
} 
login() {
    let logguer = false
    if (localStorage.getItem('userlogin')){
        logguer=true
    }
    return logguer
}
logout() {
    localStorage.removeItem("userlogin");
    this.router.navigate(['/']);
}
handleError(error: any) {
    if (error.status === 500) {
    }
}
}


