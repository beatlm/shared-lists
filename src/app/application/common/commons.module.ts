import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from './components/table/table.module';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [],

  imports: [CommonModule, TableModule],
  exports: [TableModule]
})
export class CommonsModule {}
