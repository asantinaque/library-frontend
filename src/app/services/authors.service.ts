import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {


  constructor(private http: HttpClient) { }

  getAllAuthors(): Observable<Author[]> {
    const url: string = "http://localhost:8080/author/allAuthors";
    return this.http.get<Author[]>(url);
  }
}

