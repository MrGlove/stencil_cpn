import { Component, Prop, Element, Host, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'gls-tag',
  styleUrl: 'gls-tag.css',
  shadow: true,
})
export class GlsTag {
  @Prop() tagStyle: string = 'primary';
  @Prop() tagContent: string = 'CONTENT';

  @Element() el: HTMLElement;
  render() {
    return (
      <Host>
        <span
          class={classNames('gls-tag', `gls-tag-${this.tagStyle}`)}
          innerHTML={this.tagContent + `<span class="tag-icon"><gls-icon icon-size='15px' icon-color='#444' icon-style='&#xe61b;'></gls-icon></span>`}
        ></span>
        <slot></slot>
      </Host>
    );
  }
}
