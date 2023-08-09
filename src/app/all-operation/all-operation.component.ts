import { Component } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UsernameDialogComponent } from '../username-dialog/username-dialog.component';
import { TaskIdDialogComponent } from '../task-id-dialog/task-id-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-operation',
  templateUrl: './all-operation.component.html',
  styleUrls: ['./all-operation.component.scss']
})
export class AllOperationComponent {
  content: string = '';
  title: string = '';
  username: string = '';
  image: File | null = null;
  createdTaskId: string = '';
  usernameFilter: string = '';
  modalUsername: string = '';

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskServiceService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {
    this.route.params.subscribe(params => {
      this.usernameFilter = params['username'] || '';
    });
  }

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.image = input.files[0];
    }
  }


  onSubmit() {
    if (!this.isFormValid()) {
      return;
    }

    const formData = new FormData();
    formData.append('content', this.content);
    formData.append('title', this.title);
    formData.append('username', this.username);
    if (this.image) {
      formData.append('image', this.image);
    }

    this.taskService.createTask(formData).subscribe(
      (response: any) => {
        console.log('Task created successfully', response);
        this.createdTaskId = response.id;

        this.router.navigate(['/all', this.username]);
        this.showCreateSuccessAlert(); // Show success Snackbar alert
      },
      (error) => {
        console.error('Error creating task', error);
      }
    );
  }

  openUsernameDialog() {
    const dialogRef = this.dialog.open(UsernameDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.modalUsername = result;
        this.router.navigate(['/all', this.modalUsername]);
      }
    });
  }

  triggerFileInput() {
    const fileInput = document.getElementById('image') as HTMLInputElement;
    fileInput.click();
  }

  isFormValid(): boolean {
    if (!this.content || !this.title || !this.username) {
      console.error('Form data is incomplete');
      return false;
    }

    return true;
  }
  showCreateSuccessAlert() {
    this.snackBar.open('Task created successfully', 'Dismiss', {
      duration: 3000,
      panelClass: 'success-snackbar'
    });
  }
}
