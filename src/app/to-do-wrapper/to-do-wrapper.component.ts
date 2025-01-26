import { Component } from '@angular/core';
import { ToDoFormComponent } from "../to-do-form/to-do-form.component";
import { ToDoListComponent } from "../to-do-list/to-do-list.component";

@Component({
  selector: 'app-to-do-wrapper',
  imports: [ToDoFormComponent, ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrls: ['./to-do-wrapper.component.css'],
})

export class ToDoWrapperComponent {
  todos: { id: number; text: string; completed: boolean }[] = [];

  generateRandomId(): number {
    return Math.floor(Math.random() * 1000000);
  }

  addTask(newTask: string) {
    const newTodo = {
      id: this.generateRandomId(),
      text: newTask,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  deleteTask(index: number) {
    this.todos.splice(index, 1);
  }

  completeTask(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
