import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

export const PRIMARY_TEXT_THRESHOLD = 34;
export const PRIMARY_SHADOW_THRESHOLD = 100;
@Component({
  selector: 'app-root',
  template: `
  <div class="app-content">
      <md-toolbar color="primary" class="primary-header" [class.with-shadow]="applyShadow">
        <span *ngIf="popText">Structuring Angular Apps with Angular Material Components</span>
      </md-toolbar>
      <md-toolbar color="primary" class="extended-header">
        <span *ngIf="!popText">Material Design Toolbars</span>
      </md-toolbar>
  </div>
  `,
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  @HostListener('window:scroll', ['$event']) private onScroll() {
    this.determineHeader(this._viewportRuler.getViewportScrollPosition());
  };

  public popText : boolean;
  public applyShadow : boolean;

  constructor(
    private _viewportRuler : ViewportRuler
  ) {}

  determineHeader = ({ top } : { top: number }) => {
    if (top >= PRIMARY_TEXT_THRESHOLD) {
      this.popText = true;
    } else {
      this.popText = false;
    }

    if (top >= PRIMARY_SHADOW_THRESHOLD) {
      this.applyShadow = true;
    } else {
      this.applyShadow = false;
    }
  }
}
