import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'todos-list',
  styleUrl: 'todos-list.css',
  shadow: true,
})
export class TodosList implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
