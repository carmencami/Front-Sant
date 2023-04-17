import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "../models/user.model";

@Injectable({
    providedIn:"root"
})

export class RegisterService{
    private registerUrl:string = "http://localhost:8532/api/users/add"
    constructor(private http:HttpClient){}

    addUser(username : string, password : string, email: string, fullname:string, _deposit:number) : Observable<UserInterface>{
        const body = {
            username : username,
            password : password,
            email : email,
            fullname: fullname,
            deposit : 10000
        }
        return this.http.post<UserInterface>(this.registerUrl, body);
    }

    
}