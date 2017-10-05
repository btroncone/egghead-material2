import { Component } from '@angular/core';

@Component({
  selector: 'egm-list',
  template: `
  <md-list>
    <h4 mdSubheader> List 1 </h4>
    <md-list-item *ngFor="let item of items">
      <h4 mdLine> {{ item.name }} </h4>
      <p mdLine> {{ item.description }} </p>
    </md-list-item>
    <md-divider> </md-divider>
    <h4 mdSubheader> List 2 </h4>
    <md-list-item *ngFor="let item of items">
      <h4 mdLine> {{ item.name }} </h4>
      <p mdLine> {{ item.description }} </p>
    </md-list-item>
  </md-list>
  <md-selection-list #selectList>
    <md-list-option
      *ngFor="let item of items"
      checkboxPosition="left"
      (click)="logChange(selectList.selectedOptions.selected)">
      {{ item.name }}
    </md-list-option>
  </md-selection-list>
  `
})
export class ListLessonComponent {
  public items = [
    { name: 'Item 1', description: 'This is a description' },
    { name: 'Item 2', description: 'Another description!'}
  ];

  logChange(event) {
    console.log(event);
  }
}
