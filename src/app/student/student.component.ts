import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [];

  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.service.getAllStudents().subscribe((students) => {this.studentList = students});
  }

}
