# Lesson 1 - Getting Started

To get started with Angular Material you first need to install `@angular/material` and `@angular/cdk`. 

```bash
npm install --save @angular/material @angular/cdk
```

It is suggested you also install `@angular/animations` and `hammerjs`. While these modules are not required you may notice some components behave irregularly if you do not include these packages. One example is the `md-slider` component, whose touch support is compromised without the addition of `hammerjs`.

```bash
npm install --save @angular/animations hammerjs
```

:bulb:  `@angular/cdk` split from `@angular/material` in beta.8

Once installation is complete it's time to set up a custom material module to encapsulate the components you are currently (or plan on using) for your application. This module will import relevant material components, for now we will start with the `MdToolbarModule`:

:bulb: `@angular/material` also exports a `MaterialModule` which includes all material components. It is recommended you do not use this and instead only include the components required by your application in a custom, application specific module. This helps keep your build as small as possible without relying on tree-shaking.

*app-material.module.ts*
```ts
import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';

@NgModule({
  exports: [
    MdToolbarModule
  ]
})
export class AppMaterialModule { }
```

Now that the material module is configured you can import it into your app module:

:bulb: If you plan to include hammerjs you could also import that in this file.

*app.module.ts*
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

You are now ready to start utilizing Angular Material components within your application!

## Recap of packages:

### Required

#### [`@angular/cdk`](https://www.npmjs.com/package/@angular/cdk)

This module offers the building blocks of `@angular/material` package, offering more generic tools for building components such as accessibility, tables, overlays and more. 

#### [`@angular/material`](https://www.npmjs.com/package/@angular/material)

This module builds off `@angular/cdk`, including all of the prominent material design themed components. 

### Highly Suggested

#### [`@angular/animations`](https://www.npmjs.com/package/@angular/animations)

This module exposes Angular's animation API, providing smooth animations and transitions to `@angular/material` components. 

### Probably Needed

#### [`hammerjs`](https://www.npmjs.com/package/hammerjs)

This module adds support for touch gestures in your `@angular/material` components. You can exclude this package if you don't plan on using  