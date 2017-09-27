import { NgModule } from '@angular/core';
import { MdSidenavModule } from '@angular/material';
import { ScrollDispatchModule, VIEWPORT_RULER_PROVIDER } from '@angular/cdk/scrolling';

@NgModule({
  exports: [
    ScrollDispatchModule,
    MdSidenavModule
  ],
  providers: [ VIEWPORT_RULER_PROVIDER ]
})
export class AppMaterialModule { }
