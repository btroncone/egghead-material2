import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { DataTableLessonComponent } from './datatable-lesson.component';

@NgModule({
  declarations: [DataTableLessonComponent],
  imports: [CommonModule, MatTableModule]
})
export class DataTableLessonModule {}
