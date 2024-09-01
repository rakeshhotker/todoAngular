import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { TodoItem } from "../todo-item/todo-item.component";
import { Todo } from "../../../models/todo.model";
import { TodoService } from "../../../services/todo.service";
import { NgFor } from "@angular/common";

@Component({
    standalone:true,
    templateUrl:'./todo-list.component.html',
    styleUrl:'./todo-list.component.css',
    selector:'home-todo-list',
    imports: [TodoItem,NgFor]
})
export class TodoList implements OnInit{
    todos: Todo[] = [];

  constructor(private todoService: TodoService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todos = this.todoService.getTodos();
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  onTodoDeleted(): void {
    this.loadTodos(); // Reload todos to update the view
  }
}