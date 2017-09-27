import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'egm-navheader',
  template: `
    <md-toolbar color="primary" class="primary-header" [class.with-shadow]="applyShadow">
      <button md-icon-button (click)="openSidenav.emit()">
        <md-icon>menu</md-icon>
      </button>
      <span *ngIf="popText" class="primary-text">Md-Sidenav</span>
    </md-toolbar>
    <md-toolbar color="primary" class="extended-header">
      <span *ngIf="!popText">Md-Sidenav</span>
    </md-toolbar>
  `,
  styleUrls: ['./nav-header.scss']
})
export class NavHeader {
  @Input() popText : boolean;
  @Input() applyShadow : boolean;
  // will add soon
  @Input() title : string;
  @Output() openSidenav = new EventEmitter<any>();
}
