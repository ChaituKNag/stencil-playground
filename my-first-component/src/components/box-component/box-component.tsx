import { FunctionalComponent, h } from '@stencil/core';

interface BoxComponentProps {
  children?: object,
  props?: object
}

export const BoxComponent: FunctionalComponent<BoxComponentProps> = (props, children) => {

  console.log(props);

    return (
      <div class="box">
      <h3>there you go</h3>
      {children}
      </div>
    );

}
