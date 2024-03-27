import { Component, Input, OnInit } from '@angular/core';

export interface Task {
  id: number;
  description: string;
  assignee?: string;
  completed: boolean;
  notes?: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() task!: Task;

  constructor() { }

  toggleCompleted() {
    this.task.completed = !this.task.completed;
  }

  ngOnInit(): void {
  }

}

