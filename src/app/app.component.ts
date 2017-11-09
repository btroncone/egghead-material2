import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'egm-app',
  template: `
  <mat-sidenav-container fullscreen>
    <egm-navheader
      (openSidenav)="sidenav.open()">
    </egm-navheader>
    <mat-sidenav #sidenav class="app-sidenav"></mat-sidenav>
    <div class="app-content">
      <router-outlet></router-outlet>
    </div>
  </mat-sidenav-container>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
