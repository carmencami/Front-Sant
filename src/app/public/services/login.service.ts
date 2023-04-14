import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "../models/user.model";

@Injectable({
    providedIn:"root"
})

export class LoginService{
    private loginUrl:string = "http://localhost:8532/api/users/login"
    constructor(private http:HttpClient){}

    login(email : string, password : string) : Observable<UserInterface>{
        const body = {
            email : email,
            password : password
        }
        return this.http.post<UserInterface>(this.loginUrl, body);
    }

    
}