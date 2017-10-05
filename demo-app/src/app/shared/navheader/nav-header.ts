import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'egm-navheader',
  template: `
    <md-toolbar color="primary" class="mat-elevation-z6">
      <button md-icon-button (click)="openSidenav.emit()">
        <md-icon>menu</md-icon>
      </button>
      <span class="primary-text">Lists</span>
    </md-toolbar>
  `,
  styleUrls: ['./nav-header.scss']
})
export class NavHeader {
  // will add soon
  @Input() title : string;
  @Output() openSidenav = new EventEmitter<any>();
}
