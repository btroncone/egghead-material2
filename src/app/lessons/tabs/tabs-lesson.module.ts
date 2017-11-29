import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';

import { TabsLessonComponent } from './tabs-lesson.component';

@NgModule({
  declarations: [TabsLessonComponent],
  imports: [CommonModule, MatTabsModule]
})
export class TabsLessonModule {}
