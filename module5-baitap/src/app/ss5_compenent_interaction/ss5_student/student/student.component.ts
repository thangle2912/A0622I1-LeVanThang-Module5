import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentDetail: Student;
  studentList: Student [] = [
    {
      name: 'Thắng 1',
      age: 22,
      class: 'A0622I1'
    },
    {
      name: 'Thắng 2',
      age: 22,
      class: 'A0622I1'
    },
    {
      name: 'Thắng 3',
      age: 22,
      class: 'A0622I1'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  clickStudent(student: Student) {
    this.studentDetail = student;
  }
}
