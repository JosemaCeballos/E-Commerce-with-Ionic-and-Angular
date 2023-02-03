import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"

@Injectable()

export class ProductService {

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<any> {
        return this._http.get('http://localhost:3001/product')
    }

    getProductById(id: number): Observable<any> {
        return this._http.get(`http://localhost:3001/product/${id}`)
    }
}