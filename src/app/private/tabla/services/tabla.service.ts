import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TablaInterface } from '../models/tabla.model';

@Injectable({
providedIn: 'root',
})
export class TablaService {
private allCryptosUrl: string = 'http://localhost:8532/api/cryptos/all';
private getUrl: string = 'http://localhost:8532/api/cryptos/get/:id';
constructor(private http: HttpClient) {}

getAllCryptos(): Observable<TablaInterface[]> {
    const lista = this.http.get<TablaInterface[]>(this.allCryptosUrl);
    return lista;
}

}