import { Component, OnInit } from '@angular/core';
import { ListBookService } from './list-book.service';
import { Router } from '@angular/router';
import { Book } from '../models/book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
  providers: [ListBookService]
})
export class ListBookComponent implements OnInit {
  books: Book[];

  constructor (private listBookService: ListBookService, private router: Router) { }

  loadBooks () {
    this.listBookService.getBooks().subscribe(res => {
      this.books = res;
    }, err => {
      alert('erro');
    });
  }

  Alterar (id: number) {
    this.router.navigate(['/register-book/'+id.toString()]);
  }

  Remover (id: number) {
    this.listBookService.removeBook(id).subscribe(res => {
      alert('livro removido com sucesso');
      this.loadBooks();
    }, err => {
      alert('erro');
    });    
  }

  insertNewBook () {
    this.router.navigate(['/register-book']);
  }

  ngOnInit () {
    this.loadBooks();
  }

}
