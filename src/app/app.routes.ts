import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { ListLessonComponent } from './lessons/lists/list-lesson.component';

export const EGGHEAD_MATERIAL_ROUTES: Routes = [
  { path: 'lists', component: ListLessonComponent },
  { path: '**', redirectTo: 'lists' }
];
