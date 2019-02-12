import { Component, OnInit } from '@angular/core';
import {Book, book1} from './book';
import {BOOKS} from './mock-books';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {
  books = BOOKS;
  selectedBook: Book;
  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  constructor() { }

  ngOnInit() {
  }

}
