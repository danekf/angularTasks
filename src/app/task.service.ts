import { Injectable } from '@angular/core';
import { Task } from './task/task.component'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Buy groceries', completed: false },
    { id: 2, description: 'Walk the dog', assignee: 'John', completed: false },
    { id: 3, description: 'Do laundry', completed: true },
  ];

  getTasks(): Task[] {
    return this.tasks
  }
}
