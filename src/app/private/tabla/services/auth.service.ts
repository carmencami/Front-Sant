import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root',
})

export class AuthService {
    constructor() {}
    
    isLogin() : boolean{
        return !!sessionStorage.getItem('user_id')
    }

}