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
  @Prop() tagCross: boolean = true;

  @Element() el: HTMLElement;
  removeTag() {
    this.el.remove()
  }
  render() {
    return (
      <Host>
        <span
          class={classNames('gls-tag', `gls-tag-${this.tagStyle}`)}
          innerHTML={this.tagContent}
        >{this.tagCross?
            <span class={'tag-cross'} onClick={this.removeTag.bind(this)}>×</span> :
            <span></span>
        }
        </span>
        <slot></slot>
      </Host>
    );
  }
}
