import {
  Component,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation
} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { OPERATOR_INFO } from './fake-data';

@Component({
  selector: 'egm-datatable-lesson',
  templateUrl: './datatable-lesson.component.html',
  styleUrls: ['./datatable-lesson.component.scss']
})
export class DataTableLessonComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pager: MatPaginator;
  public dataSource = new MatTableDataSource(OPERATOR_INFO);

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.pager;
  }
}
