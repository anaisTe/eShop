import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/products.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(environment.baseAPIURL + '/products')
  }

  getProductById(id: string): Observable<IProduct | undefined> {
    return this.httpClient.get<IProduct>(`${environment.baseAPIURL}/products/${id}`);
  }
}
