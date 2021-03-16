import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsListComponent } from './authors-list/authors-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'', component: AuthorsListComponent},
      {path:'**',redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
