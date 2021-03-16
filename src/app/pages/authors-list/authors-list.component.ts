import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/interfaces';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})

export class AuthorsListComponent implements OnInit {

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  authors: Author[] = [];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
  }


  async getAuthors() {
    this.authors = await this.authorsService.getAllAuthors().toPromise();
    this.showAuthors();
   }

  showAuthors() {
    console.log(this.authors);
  }
}
