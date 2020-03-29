import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconsModule } from './icons.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    IconsModule
  ],
  exports: [
    FlexLayoutModule,
    IconsModule
  ]
})
export class SharedModule { }
