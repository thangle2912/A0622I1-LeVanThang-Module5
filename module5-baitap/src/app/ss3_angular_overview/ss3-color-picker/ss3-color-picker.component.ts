import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ss3-color-picker',
  templateUrl: './ss3-color-picker.component.html',
  styleUrls: ['./ss3-color-picker.component.css']
})
export class Ss3ColorPickerComponent implements OnInit {

  color = 'blue';

  constructor() {
  }

  ngOnInit(): void {
  }

}
