import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
import { SnackbarLessonComponent } from './snackbar-lesson.component';

@NgModule({
  declarations: [SnackbarLessonComponent],
  imports: [CommonModule, MatSnackBarModule]
})
export class SnackbarLessonModule {}
