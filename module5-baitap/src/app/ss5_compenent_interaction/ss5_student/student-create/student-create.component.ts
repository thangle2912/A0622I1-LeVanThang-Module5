import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  @Output() createStudent = new  EventEmitter<Student>();

  constructor() { }

  ngOnInit(): void {
  }

  addStudent(name: string, age: string, value3: string) {

  }
}
