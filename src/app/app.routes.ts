import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { LESSON_ROUTES } from './lessons/lessons.routes';

const [{ path: firstLessonPath }] = LESSON_ROUTES;

export const EGGHEAD_MATERIAL_ROUTES: Routes = [
  ...LESSON_ROUTES,
  { path: '**', redirectTo: firstLessonPath }
];
