import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  @Input() todos: { id: number, text: string, completed: boolean }[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() completeTask = new EventEmitter<number>();

  onDeleteTask(index: number) {
    this.deleteTask.emit(index);
  }

  onCompleteTask(index: number) {
    this.completeTask.emit(index);
  }
}
