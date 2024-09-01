import { Component } from "@angular/core";
import { TodoService } from "../../../services/todo.service";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'home-todo-add',
    templateUrl:'./todo-add.component.html',
    standalone:true,
    imports:[FormsModule]
})
export class TodoAdd{
    newTodoTitle: string = '';

  constructor(private todoService: TodoService) {}

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }
}