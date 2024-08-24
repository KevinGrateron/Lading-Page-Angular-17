import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL:string = "https://fakestoreapi.com/products/";
  private _http = inject(HttpClient); // manera de hacer con inject, la cual es una manera nueva de las ultimas versiones de angular
  constructor(private http:HttpClient) { }

  public getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.baseURL);
  }

  public getProduct(id: number) :Observable<IProduct>{
    return this._http.get<IProduct>(`${this.baseURL}${id}`);
  }

}
