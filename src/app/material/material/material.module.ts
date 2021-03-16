import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list'; 



@NgModule({
  exports:
    [MatSidenavModule,
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatGridListModule
    ]
})
export class MaterialModule { }
