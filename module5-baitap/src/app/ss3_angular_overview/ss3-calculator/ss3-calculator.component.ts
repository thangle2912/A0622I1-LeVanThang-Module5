import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss3-calculator',
  templateUrl: './ss3-calculator.component.html',
  styleUrls: ['./ss3-calculator.component.css']
})
export class Ss3CalculatorComponent implements OnInit {
  result: number;
  error = '';
  constructor() { }

  ngOnInit(): void {
  }

  calculator(operation: string, firstNumber: string, secondNumber: string) {
    switch (operation) {
      case '+':
        this.result = +firstNumber + +secondNumber;
        this.error = '';
        break;
      case '-':
        this.result = +firstNumber - +secondNumber;
        this.error = '';
        break;
      case '*':
        this.result = +firstNumber * +secondNumber;
        this.error = '';
        break;
      case '/':
        if (+secondNumber === 0) {
          this.error = 'Second Number is not valid !';
        } else {
          this.result = +firstNumber / +secondNumber;
        }
        break;
    }
  }
}
