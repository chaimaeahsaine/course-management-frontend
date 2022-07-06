import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  constructor(private http:HttpClient) { }

  getAllProfessors():Observable<any>{
    return this.http.get("http://localhost:3000/professor");
  }
}
