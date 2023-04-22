import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';


@Component({
  selector: 'app-ss6-register',
  templateUrl: './ss6-register.component.html',
  styleUrls: ['./ss6-register.component.css']
})
export class Ss6RegisterComponent implements OnInit {
  rfRegister: FormGroup;
  countries: string[] = ['Quảng Trị', 'Quảng Bình'];
  genderList: string[] = ['Nam', 'Nữ', 'Khác'];
  password: string;


  constructor() {
  }

  ngOnInit(): void {

    this.rfRegister = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_!#$%&\'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$')]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        country: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required, this.checkAge]),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^(((\\\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})')])
      },
      [this.checkMatch('password', 'confirmPassword')]
    );

  }

  checkAge(control: AbstractControl) {
    const age = control.value;
    if (age < 18) {
      return {invalidAge: true};
    }
    return null;
  }

  checkMatch(password: string, confirmPassword: string) {
    return (form: AbstractControl) => {
      const passwordValue = form.get(password)?.value;
      const confirmPasswordValue = form.get(confirmPassword)?.value;

      if (passwordValue !== confirmPasswordValue) {
        return {passwordNotMatch: true};
      }
      return null;
    };
  }
}
