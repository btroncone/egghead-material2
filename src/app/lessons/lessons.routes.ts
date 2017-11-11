import { Route } from '@angular/router';

import { ListLessonComponent } from './lists/list-lesson.component';
import { IconsLessonComponent } from './icons/icons-lesson.component';

export interface LessonRoute extends Route {
  data: {
    readonly shortName: string;
    readonly lessonName: string;
  };
}

export type LessonRoutes = LessonRoute[];

export const LESSON_ROUTES: LessonRoutes = [
  {
    path: 'icons',
    component: IconsLessonComponent,
    data: {
      shortName: 'Icons',
      lessonName: 'Utilize Material Design Icons for App Icons and Buttons'
    }
  },
  {
    path: 'lists',
    component: ListLessonComponent,
    data: {
      shortName: 'Lists',
      lessonName: 'Lists'
    }
  }
];
