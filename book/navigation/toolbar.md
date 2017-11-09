# Lesson 2 - Toolbars

#### Watch The Video (Coming Soon)
 To get started using the material design toolbar component you first need to include it in your application's material design module: 

*app-material.module.ts*
```ts
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
```

The `mat-toolbar` component will now be available to use in your component templates. Let's start by including a basic toolbar in our main app component:

*app.component.ts*
```html
<mat-toolbar>Structuring Angular Apps with Angular Material Components</mat-toolbar>
```

![Default Toolbar](https://i.imgur.com/9zppIMU.png)

Toolbars can be colored using the `color` input. The options are `primary`, `accent`, or `warn`, applying the appropriate background based on your application theme:

```html
<mat-toolbar>No Setting</mat-toolbar>
<mat-toolbar color="primary">Primary</mat-toolbar>
<mat-toolbar color="accent">Accent</mat-toolbar>
<mat-toolbar color="warn">Warn</mat-toolbar>
```
![Toolbar Colors](https://i.imgur.com/JkrwDgy.png)

Toolbars can also be nested, using the `mat-toolbar-row` component: 

:warning: The color of nested `toolbar-row` components is dependent on that of the parent `mat-toolbar`.

```html
<mat-toolbar color="primary">
    <span>Structuring Angular Apps with Angular Material Components</span>
    <mat-toolbar-row color="primary">Structuring Angular Apps with Angular Material Components</mat-toolbar-row>
    <mat-toolbar-row color="accent">Structuring Angular Apps with Angular Material Components</mat-toolbar-row>
    <mat-toolbar-row color="warn">Structuring Angular Apps with Angular Material Components</mat-toolbar-row>
</mat-toolbar> 
```

## Creating An Extended Header
One material design pattern I particularly like is the extended header, as seen on sites like [Material Design Guidelines](https://material.io/guidelines/). Let's see how we can quickly recreate this effect using the `mat-toolbar` component and material design cdk.


![Extended Header](https://i.imgur.com/zC35Ygt.gif)

First let's add two `mat-toolbar` components. The first will be the sticky header, the second the extended header to scroll under as the user moves down on the page. We will also add some basic CSS to fix our primary app header to the top and increase the padding and font size of the extended header:

*app.component.ts*
```html
<div class="app-content">
  <mat-toolbar color="primary" class="primary-header">
   <span>Structuring Angular Apps with Angular Material Components</span>
  </mat-toolbar>
  <mat-toolbar color="primary" class="extended-header">
   <span>Material Design Toolbars</span>
  </mat-toolbar>
</div>
```

*app.component.scss*
```scss
// in order to test scrolling
.app-content {
  height: 2000px;
}

.primary-header {
  position: fixed;
  top: 0;
  // primary header will need box shadow when extended header scrolls under
  &.with-shadow {
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)
  }
}

.extended-header {
  font-size: 32px;
  padding-top: 80px;
  padding-bottom: 20px;
}
```

![First Version](https://i.imgur.com/4c5UNzC.png)

Now we need to add the proper queues for when to show and hide the appropriate header text and apply box shadow. To do this we can utilize Angular's `HostListener` for scroll events and the Angular CDK `ViewportRuler` helper service for scrolling information. First, include `ViewportRuler` and `ScrollDispatchModule` (required by `ViewportRuler`) in the `AppMaterialModule`:

*app-material.module.ts*
```ts
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { ScrollDispatchModule, VIEWPORT_RULER_PROVIDER } from '@angular/cdk/scrolling';

@NgModule({
  exports: [
    MatToolbarModule,
    ScrollDispatchModule
  ],
  providers: [ VIEWPORT_RULER_PROVIDER ]
})
export class AppMaterialModule { }
```

Next, we can utilize `@HostListener` to listen to the `window:scroll` event and utilize Angular CDK's `ViewportRuler` to provide the current user scroll position. With this information we can hide or show the appropriate header text and apply box shadow as the user reaches the correct scroll thresholds:

```ts
export const PRIMARY_TEXT_THRESHOLD = 34;
export const PRIMARY_SHADOW_THRESHOLD = 100;

@Component({
  selector: 'app-root',
  template: `
  <div class="app-content">
      <mat-toolbar color="primary" class="primary-header" [class.with-shadow]="applyShadow">
        <span *ngIf="popText">Structuring Angular Apps with Angular Material Components</span>
      </mat-toolbar>
      <mat-toolbar color="primary" class="extended-header">
        <span *ngIf="!popText">Material Design Toolbars</span>
      </mat-toolbar>
  </div>
  `,
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  @HostListener('window:scroll') private onScroll() {
    this.determineHeader(this._viewportRuler.getViewportScrollPosition());
  };

  public popText : boolean;
  public applyShadow : boolean;

  constructor(
    private _viewportRuler : ViewportRuler
  ) {}

  determineHeader({ top } : { top: number }) {
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
```

The material design extended header component is ready to go!

![Final Demo](https://i.imgur.com/3kJL2ha.gif)

## Material Design Guidelines
- [Toolbars](https://material.io/guidelines/components/toolbars.html)
- [Subheaders](https://material.io/guidelines/components/subheaders.html)
- [Scrolling Techniques](https://material.io/guidelines/patterns/scrolling-techniques.html#)
