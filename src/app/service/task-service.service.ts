import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiUrl = 'https://task.ecmpp.com/api/task';

  constructor(private _HttpClient: HttpClient, private _Router: Router) { }

  createTask(taskData: FormData) {
    return this._HttpClient.post(`${this.apiUrl}/add`, taskData);
  }

  updateTask(taskId: string, taskData: FormData) {
    return this._HttpClient.post(`${this.apiUrl}/edit`, taskData);
  }

  deleteTask(taskId: string) {
    return this._HttpClient.delete(`${this.apiUrl}/remove/${taskId}`);
  }
  getAllTasks(username: string) {
    return this._HttpClient.get(`${this.apiUrl}/all/${username}`);
  }

  getTaskById(taskId: string) {
    return this._HttpClient.get(`${this.apiUrl}/Show/${taskId}`);
  }
}
