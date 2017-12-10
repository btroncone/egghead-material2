import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatDatepickerModule,
  MatInputModule,
  MatButtonModule,
  MatNativeDateModule
} from '@angular/material';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import { PlatformModule } from '@angular/cdk/platform';
import { DatepickerLessonComponent } from './datepicker-lesson.component';

@NgModule({
  declarations: [DatepickerLessonComponent],
  imports: [
    CommonModule,
    PlatformModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class DatepickerLessonModule {}
