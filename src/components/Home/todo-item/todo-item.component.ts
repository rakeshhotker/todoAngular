import { Component, EventEmitter, Input, input, Output } from "@angular/core";
import { Todo } from "../../../models/todo.model";
import { TodoService } from "../../../services/todo.service";

@Component({
    standalone:true,
    templateUrl:'./todo-item.component.html',
    selector:'home-todo-item',
    styleUrl:'./todo-item.component.css'
})
export class TodoItem{
    @Input() todo!:Todo;
    @Output() deleted=new EventEmitter<void>();
    constructor(private todoService: TodoService) {}

  toggleCompletion(): void {
    this.todoService.toggleTodoCompletion(this.todo.id);
  }

  deleteTodo(): void {
    this.todoService.deleteTodo(this.todo.id);
    this.deleted.emit();
  }
}