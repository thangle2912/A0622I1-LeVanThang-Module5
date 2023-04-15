import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ss5-countdown',
  templateUrl: './ss5-countdown.component.html',
  styleUrls: ['./ss5-countdown.component.css']
})
export class Ss5CountdownComponent implements OnInit {
  @Input() time = 5;
  timeCurren: number;

  intervalId = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.timeCurren = this.time;
  }

  start() {
    if (this.timeCurren <= 0) {
      this.timeCurren = this.time;
    }
    this.countdown();
  }

  stop() {
    this.stopCountDown();
  }

  reset() {
    this.stopCountDown();
    this.timeCurren = this.time;
  }

  // Dừng đếm ngược
  stopCountDown() {
    clearInterval(this.intervalId);
  }

  countdown() {
    this.stopCountDown();
    this.intervalId = window.setInterval(() => {
      this.timeCurren -= 1;
      if (this.timeCurren <= 0) {
        this.stopCountDown();
      }
    }, 1000);
  }
}
