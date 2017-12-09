import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material';
import { DatepickerLessonComponent } from './datepicker-lesson.component';

@NgModule({
  declarations: [DatepickerLessonComponent],
  imports: [CommonModule, MatDatepickerModule]
})
export class DatepickerLessonModule {}
