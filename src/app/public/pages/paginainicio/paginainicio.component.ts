import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginainicio',
  templateUrl: './paginainicio.component.html',
  styleUrls: ['./paginainicio.component.scss']
})
export class PaginainicioComponent implements OnInit {

  showLogin : boolean = true
  showSpinner : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  navigateToRegister(event: boolean){
    this.showLogin = event
  }
  navigateToLogin(event: boolean){
    this.showLogin = event
  }
  navigateToTabla(event: boolean){
    this.showSpinner = event
  }
}