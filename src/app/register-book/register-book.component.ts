import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterBookService } from './register-book.service';
import { FormControl } from '@angular/forms';
import { Book } from '../models/book';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css'],
  providers: [RegisterBookService]
})
export class RegisterBookComponent implements OnInit {
  name: FormControl = new FormControl();
  newBook: Book = new Book;

  constructor (private registerBookService: RegisterBookService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.CarregarRegistroSelecionado(params["id"]));
  }

  CarregarRegistroSelecionado (id: number) {
    this.registerBookService.loadBook(id).subscribe(res => {
      this.newBook = res;
      this.name.setValue(this.newBook.name);
    }, err => {
      alert('erro');
    });
  }

  Salvar () {
    this.newBook.name = this.name.value;

    this.registerBookService.postBook(this.newBook).subscribe(res => {
      alert('sucesso');
      this.router.navigate(['/list-book']);
    }, err => {
      alert('erro');
    });
  }

  SalvarInclusao (book: Book) {
   
  }

  ngOnInit () {
  }

}
