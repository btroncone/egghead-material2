import { Routes } from '@angular/router';

import { ListLessonComponent } from './lists/list-lesson.component';
import { IconsLessonComponent } from './icons/icons-lesson.component';

export const LESSON_ROUTES: Routes = [
  {
    path: 'icons',
    component: IconsLessonComponent,
    data: {
      lessonName: 'Icons'
    }
  },
  {
    path: 'lists',
    component: ListLessonComponent,
    data: {
      lessonName: 'Lists'
    }
  }
];
