import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    const url: string = "http://localhost:8080/api/book/allBooks";
    return this.http.get<Book[]>(url);
  }
}
