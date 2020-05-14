import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'knc-greet-component',
  styleUrl: 'greet-component.css',
  shadow: true
})
export class GreetComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
