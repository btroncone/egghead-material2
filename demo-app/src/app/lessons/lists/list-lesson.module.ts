import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListLessonComponent } from './list-lesson.component';

@NgModule({
  declarations: [
    ListLessonComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdListModule
  ]
})
export class ListLessonModule { }
