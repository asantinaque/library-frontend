import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { MaterialModule } from '../material/material/material.module';
import { BooksListComponent } from './books-list/books-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [AuthorsListComponent, BooksListComponent],
  imports: [
    FlexLayoutModule,
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
