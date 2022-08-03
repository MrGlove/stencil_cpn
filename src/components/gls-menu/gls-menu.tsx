import { Component,Element, Host, h } from '@stencil/core';

@Component({
  tag: 'gls-menu',
  styleUrl: 'gls-menu.css',
  shadow: true,
})
export class GlsMenu {
  @Element() el: HTMLElement
  ulClick(e) {
    this.el.shadowRoot.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
    console.log('menu switched to '+e.target.innerText);
    
  }
  render() {
    return (
      <Host>
        <div class="container">
          <ul class="gls-menu-demo" onClick={this.ulClick.bind(this)}>
            <li class="gls-menu-item active">卡片A</li>
            <li class="gls-menu-item">卡片B</li>
            <li class="gls-menu-item">卡片C</li>
            <li class="gls-menu-item">卡片D</li>
          </ul>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
