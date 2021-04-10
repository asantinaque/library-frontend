import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'authorList', component: AuthorsListComponent},
      {path:'bookList', component: BooksListComponent},
      {path:'**',redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
