import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "../models/user.model";
import { DataUserInterface } from "src/app/private/tabla/models/dataUser.model";

@Injectable({
    providedIn:"root"
})

export class LoginService{
    private loginUrl:string = "http://localhost:8532/api/users/login"
    constructor(private http:HttpClient){}

    login(username : string, password : string) : Observable<DataUserInterface>{
        const body = {
            username: username,
            password : password
        }
        return this.http.post<DataUserInterface>(this.loginUrl, body);
    }

    
}