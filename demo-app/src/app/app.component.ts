import { Component, HostListener } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

export const PRIMARY_TEXT_THRESHOLD = 34;
export const PRIMARY_SHADOW_THRESHOLD = 100;

@Component({
  selector: 'egm-app',
  template: `
  <md-sidenav-container>
    <egm-navheader
      (openSidenav)="sidenav.open()"
      [popText]="popText"
      [applyShadow]="applyShadow">
    </egm-navheader>
    <md-sidenav #sidenav class="app-sidenav"></md-sidenav>
    <div class="app-content"> </div>
  </md-sidenav-container>
  `,
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  public popText : boolean;
  public applyShadow : boolean;

  @HostListener('window:scroll') private onScroll() {
    this.determineHeader(this._viewportRuler.getViewportScrollPosition());
  }

  constructor(
    private _viewportRuler : ViewportRuler
  ) {}

  determineHeader({ top } : { top : number }) {
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
