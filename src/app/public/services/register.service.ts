import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.model';

@Injectable({
providedIn: 'root',
})
export class RegisterService {
private registerUrl: string = 'http://localhost:8532/api/users/add';
constructor(private http: HttpClient) {}

addUser(username: string, email: string, password: string): Observable<UserInterface> {
    const body = {
    username: username,
    email: email,
    password: password,
    }
    // TO-DO: tratar el error 500
    return this.http.post<UserInterface>(this.registerUrl, body);
}
}
