import { Todo } from './../../models/Todo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
    console.log('Toggle');
  }

  onDelete(todo) {
    console.log('delete', todo);
  }


}
