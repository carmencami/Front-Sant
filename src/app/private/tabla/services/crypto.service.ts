import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoInterface } from '../models/crypto.model';

@Injectable({
providedIn: 'root',
})
export class CryptoService {
private allCryptosUrl: string = 'http://localhost:8532/api/cryptos/all';
private getUrl: string = 'http://localhost:8532/api/cryptos/get/:id';
constructor(private http: HttpClient) {}

getAllCryptos(): Observable<CryptoInterface[]> {
    const lista = this.http.get<CryptoInterface[]>(this.allCryptosUrl);
    return lista;
}

}