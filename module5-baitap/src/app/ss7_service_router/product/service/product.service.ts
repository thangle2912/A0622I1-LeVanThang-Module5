import {Injectable} from '@angular/core';
import {Product} from '../../model/product';
import {Word} from '../../model/word';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[];
  API = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.API}/${id}`);
  }

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>('http://localhost:3000/products', product);
  }

  update(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>('http://localhost:3000/products/' + id, product);
  }

  delete(id: number): Observable<Product> {
    // @ts-ignore
    return this.httpClient.delete<Product>(`${this.API}/${id}`);
  }
}
