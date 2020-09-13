import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [DialogComponent],
  exports: [DialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ]
})
export class DialogModule {}
