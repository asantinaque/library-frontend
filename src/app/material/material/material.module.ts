import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card'; 



@NgModule({
  exports:[
      MatButtonModule,
      MatCardModule,
      MatDividerModule,
      MatGridListModule,
      MatIconModule,
      MatSidenavModule,
      MatTableModule,
      MatToolbarModule,
    ]
})
export class MaterialModule { }
