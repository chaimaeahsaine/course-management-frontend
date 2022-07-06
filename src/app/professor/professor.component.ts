import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professorList = [];

  constructor(private service: ProfessorService) { }

  ngOnInit(): void {
    this.service.getAllProfessors().subscribe((professors) => {this.professorList = professors});
  }

}
