import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.scss']
})
export class AllTaskComponent implements OnInit {
  tasks: any[] = [];
  username: string = '';

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskServiceService
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')!;
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getAllTasks(this.username).subscribe(
      (response: any) => {
        this.tasks = response;
      },
      (error) => {
        console.error('Error fetching tasks', error);
      }
    );
  }
}
