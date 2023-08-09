import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from 'src/app/service/task-service.service';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from 'src/app/update-dialog/update-dialog.component';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  task: any;
  taskId: string = '';

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private taskService: TaskServiceService,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id')!;
    this.fetchTask(this.taskId); // Fetch the task details and assign it to the 'task' property
  }

  openUpdateDialog() {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      width: '400px',
      data: { taskId: this.taskId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'updated') {
        this.fetchTask(this.taskId); // Update the task details after it's been updated
        this.router.navigate(['/update', this.taskId]); // Navigate to the update page with the same task ID
      }
    });
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.taskService.deleteTask(this.taskId).subscribe(
          () => {
            this.router.navigate(['/all-operation']); // Redirect to the tasks list page after deletion
            this.showDeleteSuccessAlert(); // Display success alert
          },
          (error) => {
            console.error('Error deleting task', error);
          }
        );
      }
    });
  }

  fetchTask(taskId: string) {
    this.taskService.getTaskById(taskId).subscribe(
      (response: any) => {
        this.task = response; // Assign the fetched task data to the 'task' property
      },
      (error) => {
        console.error('Error fetching task', error);
      }
    );
  }

  showDeleteSuccessAlert() {
    this.snackBar.open('Task deleted successfully', 'Dismiss', {
      duration: 3000, // Display for 3 seconds
      panelClass: 'success-snackbar' // Apply custom styles if needed
    });
  }
}
