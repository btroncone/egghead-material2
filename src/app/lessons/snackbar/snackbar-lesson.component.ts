import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'egm-snackbar-lesson',
  templateUrl: './snackbar-lesson.component.html',
  styleUrls: ['./snackbar-lesson.component.scss']
})
export class SnackbarLessonComponent implements OnInit {
  ngOnInit() {}
}
