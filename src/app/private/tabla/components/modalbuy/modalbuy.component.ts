// import { Component, Inject, OnInit } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { TablaService } from '../../services/tabla.service';
// import { TablaInterface } from '../../models/tabla.model';
// import { FormControl } from '@angular/forms';
// import { UsersService } from 'src/app/public/services/users.service';

// @Component({
// selector: 'app-buymodal',
// templateUrl: './buymodal.component.html',
// styleUrls: ['./buymodal.component.scss']
// })
// export class BuymodalComponent implements OnInit {
// tabla !: TablaInterface
// maxQuantity! : number
// userDeposit: any
// quantity = new FormControl('')
// user_id = sessionStorage.getItem('user_id')
// username = sessionStorage.getItem('username')
// fullname = sessionStorage.getItem('fullname')
// password = sessionStorage.getItem('password')
// email = sessionStorage.getItem('email')
// deposit : any = sessionStorage.getItem('deposit')
// newBalance : any

// constructor(
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     public dialogRef: MatDialogRef<BuymodalComponent>,
//     private usersService: UsersService) { }

// ngOnInit(): void {
//     this.usersService
//     .getCryptosByUserId(this.data.crypto_id)
//     .subscribe(
//     (cryptos) => {
//         console.log("HELLO currency info")
//         this.crypto_user = this.crypto_user
//         this.userDeposit = sessionStorage.getItem('deposit')
//         this.maxAmount = JSON.parse(this.userDeposit) / this.crypto_user.value
//     },
//     (err) => {
//         this.handleError(err)
//     }
//     )    
    
// }

// isNumberKey(event: any) {
//     var charCode = (event.which) ? event.which : event.keyCode
//     if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57))){
//     return false;
//     }
//     return true;
// }

// handleError(error: any) {
//     if (error.status === 500) {
//     console.log(error)
//     }
// }

// buy(){
//     let amount = this.amount.value
//     if (amount <= this.maxAmount && amount > 0) {
//     amount = +this.data.inWallet + +amount
//     console.log(this.data.inWallet)
//     this.usersService
//     .updateCryptos(this.data.crypto_id, this.user_id, amount)
//     .subscribe(
//         (data) => {
//         console.log("HELLO currency info")
//         console.log(data)
        
//         this.dialogRef.close();
//         },
//         (err) => {
//         this.handleError(err)
//         })
    
//     }else{
//     if (amount <= 0) {
//         this.handleError(err)}
//     }    
// }


// }