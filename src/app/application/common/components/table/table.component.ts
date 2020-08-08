import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input () displayedColumns: string[];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
