import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { NavHeader } from './nav-header';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [NavHeader],
  declarations: [NavHeader]
})
export class NavHeaderModule {}
