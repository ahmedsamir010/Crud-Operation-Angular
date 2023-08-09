import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-task-id-dialog',
  templateUrl: './task-id-dialog.component.html',
  styleUrls: ['./task-id-dialog.component.scss']
})
export class TaskIdDialogComponent {
  taskId: string = '';

  constructor(public dialogRef: MatDialogRef<TaskIdDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
