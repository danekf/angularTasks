import { Injectable } from '@angular/core';
import { Task } from './task/task.component';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private backendUrl = 'http://localhost:3000'; // URL to your backend

  constructor(private http: HttpClient) {} // Inject HttpClient

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.backendUrl}/tasks`);
  }
}
