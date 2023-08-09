import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  rfCustomer: FormGroup;
  customerTypeList: CustomerType[];
  id: number;


  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    await this.customerTypeService.findAll().subscribe(next => {
      this.customerTypeList = next;
    });
    await this.activatedRoute.paramMap.subscribe(paramMap => {
      const key = +paramMap.get('id');
      this.id = key;
      this.customerService.findById(key).subscribe(data => {
        this.rfCustomer = new FormGroup({
          name: new FormControl(data[0].name, []),
          birthday: new FormControl(data[0].birthday, []),
          gender: new FormControl(data[0].gender, []),
          idCard: new FormControl(data[0].idCard, []),
          phoneNumber: new FormControl(data[0].phoneNumber, []),
          email: new FormControl(data[0].email, []),
          address: new FormControl(data[0].address, []),
          customerType: new FormControl(this.customerTypeList.filter(item => item.id === data[0].customerType.id)[0], []),
        });
      });
    });

  }

  editCustomer() {
    this.customerService.update({...this.rfCustomer.value, id: this.id}).subscribe();
    this.router.navigateByUrl('/customer');
  }


}
