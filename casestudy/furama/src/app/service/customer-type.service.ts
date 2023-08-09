import { Injectable } from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>('http://localhost:3000/customerTypes');
  }
}
