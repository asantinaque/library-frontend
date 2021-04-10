import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/interfaces';


@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})

export class AuthorsListComponent implements OnInit {


  authors: Author[] = [];
  
  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.getAuthors();
  }


  async getAuthors() {
    this.authors = await this.authorsService.getAllAuthors().toPromise();
    this.showAuthors();
   }

  showAuthors() {
    console.log(this.authors);
  }
}
