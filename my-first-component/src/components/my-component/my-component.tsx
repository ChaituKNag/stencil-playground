import { Component, Prop, State, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { BoxComponent } from '../box-component/box-component';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() firstValue: number;
  @State() secondValue: number;
  @State() showResult: boolean;

  private handleSubmit(e) {
    e.preventDefault();

    this.showResult = true;
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private handleFieldChange(e) {
    this.showResult = false;
    if(e.target.name === 'firstValue') {
      const value = e.target.value;
      this.firstValue = value;
    }
    if(e.target.name === 'secondValue') {
      const value = e.target.value;
      this.secondValue = value;
    }
  }

  render() {
    return <div>
    <p>Hello, World! I'm {this.getText()}</p>
    <form onSubmit={e => this.handleSubmit(e)}>
    <input name="firstValue" onInput={e => this.handleFieldChange(e)} placeholder="first value"/>
    <input name="secondValue" onInput={e => this.handleFieldChange(e)} placeholder="second value"/>
    <button>Click me</button>
    </form>
    {this.showResult && <add-component first={this.firstValue} second={this.secondValue}></add-component>}
    <br/>
    <br/>
    <BoxComponent>
      <h2>Hello World</h2>
    </BoxComponent>
    </div>;
  }
}
