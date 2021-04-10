import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book, Author } from '../../interfaces/interfaces';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[] = [];
  authors: string = "";

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  async getAuthors() {
    this.books = await this.booksService.getAllBooks().toPromise();
    this.showAuthors();
  }

  showAuthors() {
    console.log(this.books);
  }

  extractAuthorsFromBook(book: Book): string {
    this.authors = "";
    this.forLoop(book);
    return this.authors.toString();
  }

  private forLoop(book: Book) {
    for (let i = 0; i < book.authors.length; i++) {
      if (this.isLastName(book, i)) {
        this.authors += (book.authors[i].fullName + ", ");
      } else {
        this.authors += (book.authors[i].fullName);
      }
    }
  }
  private isLastName(book: Book, i: number) {
    return (i !== book.authors.length - 1);
  }
}
