import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// * Import from Material
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    MatSidenavModule
  ]
})
export class MaterialModule { }
