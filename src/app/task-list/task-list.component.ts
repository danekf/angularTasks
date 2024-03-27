import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task/task.component'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  getUniqueAssignees(): string[] {
    const allAssignees = this.tasks.map(task => task.assignee).filter(assignee => assignee !== undefined) as string[]; // Filter and type assertion
    return [...new Set(allAssignees)];
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
