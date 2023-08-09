import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Facility} from '../../model/facility/facility';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer [];
  customerTypeList: CustomerType [];
  customerDelete: Customer;
  customerListDelete: Customer[] = [];

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(next => {
      this.customerList = next;
    });
    this.customerTypeService.findAll().subscribe(next => {
      this.customerTypeList = next;
    });
  }


  getCustomerDelete(customer: Customer) {
    this.customerDelete = customer;
  }

  deleteCustomer() {
    this.customerService.delete(this.customerDelete.id).subscribe(next => {
    }, error => {
    }, () => {
      this.customerService.findAll().subscribe(next => {
        this.customerList = next;
      });
    });
  }

  search(name: string, customerType: string, birthdayStart: string, birthdayEnd: string) {
    this.customerService.search(name, customerType, birthdayStart, birthdayEnd).subscribe(next => {
      this.customerList = next;
    });
  }

  checkbox(customer: Customer) {
    // let product1: Product;
    this.customerService.findById(customer.id).subscribe(next => {
      // console.log(next[0]);
      this.customerListDelete.push(next[0]);
    });

  }

  deleteAll() {
    // tslint:disable-next-line:prefer-for-of
    console.log(this.customerListDelete);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.customerListDelete.length; i++) {
      this.customerService.delete(this.customerListDelete[i].id).subscribe(next => {
      }, error => {
      }, () => {
        this.ngOnInit();
      });
    }
  }
}
