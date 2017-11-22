import { Route } from '@angular/router';

import { ListLessonComponent } from './lists/list-lesson.component';
import { IconsLessonComponent } from './icons/icons-lesson.component';
import { InputsLessonComponent } from './inputs/inputs-lesson.component';
import { ToolbarLessonComponent } from './toolbars/toolbar-lesson.component';
import { LoadingLessonComponent } from './loading/loading-lesson.component';

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
    path: 'toolbars',
    component: ToolbarLessonComponent,
    data: {
      shortName: 'Toolbars',
      lessonName: 'Utilize Material Design Toolbars for Application Headers'
    }
  },
  {
    path: 'inputs',
    component: InputsLessonComponent,
    data: {
      shortName: 'Inputs',
      lessonName:
        'Manage User Input with Material Design Inputs and AutoComplete'
    }
  },
  {
    path: 'lists',
    component: ListLessonComponent,
    data: {
      shortName: 'Lists',
      lessonName: 'Lists'
    }
  },
  {
    path: 'loading',
    component: LoadingLessonComponent,
    data: {
      shortName: 'Loading',
      lessonName: 'Loading Lesson'
    }
  }
];
