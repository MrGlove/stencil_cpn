import { Component, Event, EventEmitter, State, Prop, Element, Host, h, Method } from '@stencil/core';

@Component({
  tag: 'gls-badge',
  styleUrl: 'gls-badge.css',
  shadow: true,
})
export class GlsBadge {
  @Prop() badgeHostText: string = '按钮';
  @Prop() badgeColor: string = '#f91';
  @Prop() badgeContent: string = '323';
  @Prop() badgeMax: number = 99;
  @Element() el: HTMLElement;
  @Event() badgehide: EventEmitter<Object>
  @State() badgeNum: number = 0;
  @Method()
  async changeNum(index: number) {
    console.log(index);

  }
  render() {
    let realContent = '';
    let contentToNumber = Number(this.badgeContent);
    if (isNaN(contentToNumber)) {
      realContent = this.badgeContent;
    } else {
      this.badgeNum = contentToNumber
      if (contentToNumber > this.badgeMax) {
        realContent = '99+';
      } else {
        realContent = `${contentToNumber}`;
      }
    }

    let newCSS = document.createElement('style');
    newCSS.innerHTML = `
      .gls-badge {
        background-color: ${this.badgeColor};
      }
    `;
    this.el.shadowRoot.appendChild(newCSS);

    return (
      <Host>
        <div class="badge-container">
          <gls-button button-radius="3px" button-type="text" button-text={this.badgeHostText}></gls-button>
          <sup class="gls-badge">{realContent}</sup>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
