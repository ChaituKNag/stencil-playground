import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

export interface Todo {
  id: string | number;
  title: string;
  done: boolean;
}

@Component({
  tag: "single-todo",
  styleUrl: "single-todo.css",
  shadow: true
})
export class SingleTodo implements ComponentInterface {
  @Prop() todo: Todo;

  render() {
    return (
      <Host>
        <p>
          <slot name="single-todo-label"></slot>
          {this.todo.title}
        </p>
      </Host>
    );
  }
}
