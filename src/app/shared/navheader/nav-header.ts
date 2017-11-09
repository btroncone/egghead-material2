import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'egm-navheader',
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z6">
      <button mat-icon-button (click)="openSidenav.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <span class="primary-text">Lists</span>
    </mat-toolbar>
  `,
  styleUrls: ['./nav-header.scss']
})
export class NavHeader {
  // will add soon
  @Input() title: string;
  @Output() openSidenav = new EventEmitter<any>();
}
