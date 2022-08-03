import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'gls-select',
  styleUrl: 'gls-select.css',
  shadow: true,
})
export class GlsSelect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
