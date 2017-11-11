import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

import { EGGHEAD_MATERIAL_ROUTES } from './app.routes';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { NavHeaderModule } from './shared/navheader/nav-header.module';

import { ListLessonModule } from './lessons/lists/list-lesson.module';
import { IconsLessonModule } from './lessons/icons/icons-lesson.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(EGGHEAD_MATERIAL_ROUTES),
    AppMaterialModule,
    NavHeaderModule,
    IconsLessonModule,
    ListLessonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
