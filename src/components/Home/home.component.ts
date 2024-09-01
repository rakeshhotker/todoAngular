import { Component } from "@angular/core";
import { TodoList } from "./todo-list/todo-list.component";
import { TodoAdd } from "./todo-add/todo-add.component";

@Component({
    selector:'app-root',
    templateUrl:'./home.component.html',
    styleUrl:'./home.component.css',
    standalone:true,
    imports: [TodoList,TodoAdd]
})
export class Home{

    test:string="rakesh";
}