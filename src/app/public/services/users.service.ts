import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/public/models/user.model';


@Injectable({
providedIn: 'root',
})

export class UsersService {
    private getUrl:string = "http://localhost:8235/api/users/get/:id"
    private updateUserUrl:string = "http://localhost:8235/api/users/update"

    constructor(private http: HttpClient) {}

    getUserById(user_id: string): Observable<UserInterface> {
        console.log('Id send:')
        console.log(user_id)
        console.log('Url send:')
        console.log(`${this.getUrl}${user_id}`)
        return this.http.get<UserInterface>(`${this.getUrl}`+ JSON.parse(user_id));
    }



    updateBalance(user_id: any, deposit: any) : Observable<UserInterface>{
        console.log('Info send:')
        console.log(user_id)
        console.log("URL send:")
        
        const body = {
            user_id: JSON.parse(user_id),
            deposit : deposit
        }   
        console.log(this.updateUserUrl, body)     
        return this.http.put<UserInterface>(this.updateUserUrl, body);
    }
    getCryptosByUserId(user_id: string): Observable<UserInterface> {
        console.log('Id send:')
        console.log(user_id)
        console.log('Url send:')
        console.log(`${this.getUrl}${user_id}`)
        return this.http.get<UserInterface>(`${this.getUrl}`+ JSON.parse(user_id));
    }

}