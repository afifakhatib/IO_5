import { Component, Input, OnInit } from '@angular/core';
import { Itodos } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

 @Input() getTodoItem !: Array<Itodos>

  constructor() { }

  ngOnInit(): void {
  }

}
