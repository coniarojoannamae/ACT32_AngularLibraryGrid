import { Component } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  bookList: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookList = this.bookService.getBookList();
  }
}
