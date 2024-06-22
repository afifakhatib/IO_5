import { Component } from '@angular/core';
import { Itodos } from './shared/models/todo.interface';
import { Istd } from './shared/models/std.interface';
import { stdData } from './shared/const/std';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IO_5';

  todoArr : Array<Itodos> = [
    {
      todoitem : 'javascript'
    },
    {
      todoitem : 'Angular 10'
    },
    {
      todoitem : 'HTML'
    }
  ]

  // todoArr :Array<Itodos> = JSON.parse(localStorage.getItem('todos') || '{}')

  stdArr : Array<Istd> = stdData

  getEmitTodo(data : Itodos){
    // console.log(data);
    this.todoArr.unshift(data)
    // localStorage.setItem('todos' , JSON.stringify(this.todoArr))
  }

  getEmitStd(data : Istd){
     this.stdArr.unshift(data)
    //  localStorage.setItem('stds' , JSON.stringify(this.stdArr))
  }

}
