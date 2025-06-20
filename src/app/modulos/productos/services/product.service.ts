
import {  Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../modelos/product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:3002/bp/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<{ data: Product[] }>(this.baseUrl).pipe(
      map(res => res.data),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Error en la API: ' + error.message));
  }
}
