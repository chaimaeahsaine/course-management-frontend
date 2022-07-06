import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  courseList = [];

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.service.getAllCourses().subscribe((courses) => {this.courseList = courses});
  }

}
