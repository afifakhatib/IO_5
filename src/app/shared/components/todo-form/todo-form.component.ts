import { Component, EventEmitter, OnInit, Output , Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodos } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("todoform") todoform !: NgForm

  @Output() emitTodo : EventEmitter<Itodos> = new EventEmitter<Itodos>();

  addTodo(data : NgForm){
   if(this.todoform.valid){
     // console.log(this.todoform.value);
     let todo = this.todoform.value;
     // console.log(todo);
     this.todoform.reset()
     this.emitTodo.emit(todo)
   }
  }
}
