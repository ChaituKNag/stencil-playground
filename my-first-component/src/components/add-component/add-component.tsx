import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'add-component',
  shadow: true
})
export class AddComponent {

  @Prop() first: number;
  @Prop() second: number;

  render() {
    return (
      <div>
        Adding {this.first} and {this.second} gives {this.first + this.second}!
      </div>
    )
  }
}
