import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { MaterialModule } from '../material/material/material.module';


@NgModule({
  declarations: [AuthorsListComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
