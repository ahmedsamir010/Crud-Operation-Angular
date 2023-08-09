import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  task: any;
  taskId: string = '';
  content: string = '';
  title: string = '';
  image: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskServiceService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id')!;
    this.fetchTask(this.taskId);
  }

  onSubmit() {
    if (!this.isFormValid()) {
      return;
    }
  
    const formData = new FormData();
    if (this.content) {
      formData.append('content', this.content);
    }
    if (this.title) {
      formData.append('title', this.title);
    }
    if (this.image) {
      formData.append('image', this.image);
    }
  
    // Include the 'id' field in the FormData
    formData.append('id', this.taskId);
  
    this.taskService.updateTask(this.taskId, formData).subscribe(
      (response: any) => {
        console.log('Task updated successfully', response);
        this.showUpdateSuccessAlert();
        this.router.navigate(['/single', this.taskId]);
      },
      (error) => {
        console.error('Error updating task', error);
        this.showUpdateErrorAlert();
      }
    );
  }
  
  fetchTask(taskId: string) {
    this.taskService.getTaskById(taskId).subscribe(
      (response: any) => {
        this.task = response;
        this.title = this.task.title;
        this.content = this.task.content;
      },
      (error) => {
        console.error('Error fetching task', error);
      }
    );
  }

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.image = input.files[0];
    }
  }

  isFormValid(): boolean {
    if (!this.content || !this.title) {
      console.error('Form data is incomplete');
      return false;
    }

    return true;
  }

  showUpdateSuccessAlert() {
    this.snackBar.open('Task updated successfully', 'Dismiss', {
      duration: 3000,
      panelClass: 'success-snackbar'
    });
  }

  showUpdateErrorAlert() {
    this.snackBar.open('Error updating task. Please try again.', 'Dismiss', {
      duration: 3000,
      panelClass: 'error-snackbar'
    });
  }
}
