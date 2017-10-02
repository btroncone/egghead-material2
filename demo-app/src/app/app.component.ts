import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'egm-app',
  template: `
  <md-sidenav-container fullscreen>
    <egm-navheader
      (openSidenav)="sidenav.open()">
    </egm-navheader>
    <md-sidenav #sidenav class="app-sidenav"></md-sidenav>
    <div class="app-content">
      <router-outlet></router-outlet>
    </div>
  </md-sidenav-container>
  `,
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {}
