import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { DialogLessonComponent } from '../dialogs/dialog-lesson.component';

@NgModule({
  declarations: [DialogLessonComponent],
  imports: [CommonModule, MatDialogModule]
})
export class DialogLessonModule {}
