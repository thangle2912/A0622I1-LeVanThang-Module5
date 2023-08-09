import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  APICustomer = 'http://localhost:3000/customers';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.APICustomer);
  }

  save(customer: Customer): Observable<Customer> {

    return this.httpClient.post<Customer>(this.APICustomer, customer);
  }

  update(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>('http://localhost:3000/customers/' + customer.id, customer);
  }

  delete(id: number): Observable<Customer> {
    // @ts-ignore
    return this.httpClient.delete<Customer>(`${this.APICustomer}/${id}`);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>('http://localhost:3000/customers?id=' + id);
  }

  search(name: string, idCustomerType: string, birthdayStart: string, birthdayEnd: string): Observable<Customer[]> {
    let url = 'http://localhost:3000/customers?name_like=' + name;
    if (idCustomerType !== '') {
      url += '&customerType.id=' + idCustomerType;
    }
    if (birthdayStart !== '') {
      url += '&birthday_gte=' + birthdayStart;
    }
    if (birthdayEnd !== '') {
      url += '&birthday_lte=' + birthdayEnd;
    }


    return this.httpClient.get<Customer[]>(url);
  }

}
