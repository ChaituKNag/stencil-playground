import {
  Component,
  ComponentInterface,
  Host,
  Prop,
  h,
  Listen
} from "@stencil/core";
import { Todo } from "../single-todo/single-todo";

@Component({
  tag: "todo-app",
  styleUrl: "todo-app.css",
  shadow: true
})
export class TodoApp implements ComponentInterface {
  @Prop() todos: Array<Todo> = [
    { id: 1, title: "Learn Stencil", done: false },
    { id: 2, title: "Learn Web Components", done: false },
    { id: 1, title: "Learn React", done: true }
  ];

  @Listen("submitTodo")
  addTodo(event) {
    this.todos = [...this.todos, event.detail];
    console.log(this.todos);
  }

  render() {
    return (
      <Host>
        <slot name="todo-app-title"></slot>
        <add-todo>
          <h4 slot="add-todo-title">Add a new Todo</h4>
          <span slot="add-todo-btn-label">Go Get It</span>
        </add-todo>
        <slot name="todo-app-list-title"></slot>
        {this.todos.map(todo => (
          <single-todo todo={todo}>
            <span slot="single-todo-label">Title: </span>
          </single-todo>
        ))}
      </Host>
    );
  }
}
