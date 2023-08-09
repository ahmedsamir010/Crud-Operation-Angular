import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-username-dialog',
  templateUrl: './username-dialog.component.html', // Correct the file name
})
export class UsernameDialogComponent {
  modalUsername: string = '';

  constructor(public dialogRef: MatDialogRef<UsernameDialogComponent>) {}

  onCloseDialog(): void {
    this.dialogRef.close();
  }
}
