import {Component, OnInit} from '@angular/core';
import {RentType} from '../../model/facility/rent-type';
import {FacilityType} from '../../model/facility/facility-type';
import {Facility} from '../../model/facility/facility';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypeList: CustomerType[];
  rfCustomer: FormGroup;


  constructor(private customerService: CustomerService,
              private toastrService: ToastrService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.findAll().subscribe(next => {
      this.customerTypeList = next;
    });
    this.rfCustomer = new FormGroup({
      // tslint:disable-next-line:max-line-length
      name: new FormControl('', [Validators.required, Validators.pattern('^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$')]),
      birthday: new FormControl('', [Validators.required, this.ageValidate]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^(((\\\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_!#$%&\'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$')]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    });
  }

  // tslint:disable-next-line:max-line-length
  // @ts-ignore
  addCustomer() {
    this.customerService.save(this.rfCustomer.value).subscribe(() => {
      this.toastrService.success('Tạo mới thành công');
      this.router.navigateByUrl('/customer');
    });

  }

  ageValidate(dob: AbstractControl) {
    const now = new Date();
    const birthDay = new Date(dob.value);
    const age = now.getFullYear() - birthDay.getFullYear();
    if (age < 18) {
      return {ageError: true};
    }
    return null;
  }

  checkAge(control: AbstractControl) {

  }

}
