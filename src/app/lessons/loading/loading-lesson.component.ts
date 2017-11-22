import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(control && control.invalid && control.dirty);
  }
}

@Component({
  selector: 'egm-loading-lesson',
  templateUrl: './loading-lesson.component.html',
  styleUrls: ['./loading-lesson.component.scss']
})
export class LoadingLessonComponent implements OnInit {
  ngOnInit() {}
}
