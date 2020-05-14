import {
  Component,
  ComponentInterface,
  Host,
  h,
  Event,
  EventEmitter,
  State
} from "@stencil/core";

@Component({
  tag: "add-todo",
  styleUrl: "add-todo.css",
  shadow: true
})
export class AddTodo implements ComponentInterface {
  @Event() submitTodo: EventEmitter;
  @State() inputValue: string;

  handleSubmit = e => {
    e.preventDefault();
    if (this.inputValue.trim() !== "")
      this.submitTodo.emit({
        id: Date.now(),
        title: this.inputValue,
        done: false
      });
    this.inputValue = "";
  };

  hanldChange = e => {
    this.inputValue = e.target.value;
  };

  render() {
    return (
      <Host>
        <slot name="add-todo-title"></slot>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.inputValue}
            type="text"
            placeholder="Enter the your title"
            onChange={this.hanldChange}
          />
          <button type="submit">
            <slot name="add-todo-btn-label">Go</slot>
          </button>
        </form>
      </Host>
    );
  }
}
