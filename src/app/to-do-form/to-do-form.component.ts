import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-form',
  imports: [FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})

export class ToDoFormComponent {
  newTask: string = '';
  showError: boolean = false;
  @Output() addTask = new EventEmitter<string>();

  onAddTask() {
    if (this.newTask.trim() === '') {
      this.showError = true;
    } else {
      this.showError = false;
      this.addTask.emit(this.newTask);
      this.newTask = '';
    }
  }
}