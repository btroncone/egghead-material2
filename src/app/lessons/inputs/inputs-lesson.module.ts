import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { InputsLessonComponent } from './inputs-lesson.component';

@NgModule({
  declarations: [InputsLessonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule]
})
export class InputsLessonModule {}
