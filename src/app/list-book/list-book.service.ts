import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable()
export class ListBookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.apiUrl + 'book');
  }

  removeBook(id: number): Observable<Book[]> {
    return this.http.delete<Book[]>(environment.apiUrl + 'book/' + id.toString());
  }
}
