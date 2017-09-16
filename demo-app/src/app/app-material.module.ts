import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { ScrollDispatchModule, VIEWPORT_RULER_PROVIDER } from '@angular/cdk/scrolling';

@NgModule({
  exports: [
    MdToolbarModule,
    ScrollDispatchModule
  ],
  providers: [ VIEWPORT_RULER_PROVIDER ]
})
export class AppMaterialModule { }
