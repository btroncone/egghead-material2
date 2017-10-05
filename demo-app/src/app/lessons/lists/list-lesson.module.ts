import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdListModule, MdIconModule, MdButtonModule } from '@angular/material';
import { ListLessonComponent } from './list-lesson.component';

@NgModule({
  declarations: [
    ListLessonComponent
  ],
  imports: [
    CommonModule,
    MdListModule,
    MdIconModule,
    MdButtonModule
  ]
})
export class ListLessonModule { }
