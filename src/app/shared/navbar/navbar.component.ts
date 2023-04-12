import { LoginComponent } from 'src/app/public/components/login/login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterComponent } from 'src/app/public/components/register/register.component';

@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  //Variable provisional hasta comprobación de logueo
login: boolean = false;
user: string | null = sessionStorage.getItem('user');

constructor(public dialog: MatDialog, public router: Router) {}

ngOnInit(): void {}

openLogin() {
    this.dialog
    .open(LoginComponent)
    .afterClosed()
    .subscribe((res) => {
        if ( res===true && this.user != null) {
        this.login = true;
        }
        console.log("lol");
    })
}
openRegister() {
    this.dialog.open(RegisterComponent);
}

// logout() {
//     sessionStorage.removeItem("user");
//     this.login = false;
//     this.router.navigate(['']);
// }
}
