import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconsModule } from './icons.module';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    IconsModule
  ],
  exports: [
    FlexLayoutModule,
    IconsModule,
    // Components
    LoaderComponent
  ]
})
export class SharedModule { }
