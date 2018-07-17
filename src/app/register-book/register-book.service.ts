import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable()
export class RegisterBookService {

  constructor(private http: HttpClient) { }

  postBook(book: Book):Observable<Book> {
    if(book.id > 0) {
      return this.http.put<Book>(environment.apiUrl + 'book/' + book.id, book);
    } else {
      book.registrationDate = new Date();
      return this.http.post<Book>(environment.apiUrl + 'book', book);
    }
  }

  loadBook(id: number):Observable<Book> {
    return this.http.get<Book>(environment.apiUrl + 'book/' + id);
  }
  
}
