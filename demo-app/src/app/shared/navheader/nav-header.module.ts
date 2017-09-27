import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdButtonModule, MdIconModule } from '@angular/material';
import { NavHeader } from './nav-header';

@NgModule({
  imports: [ CommonModule, MdToolbarModule, MdButtonModule, MdIconModule ],
  exports: [ NavHeader ],
  declarations: [ NavHeader ],
})
export class NavHeaderModule { }
