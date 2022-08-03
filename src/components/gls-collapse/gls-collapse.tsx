import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'gls-collapse',
  styleUrl: 'gls-collapse.css',
  shadow: true,
})
export class GlsCollapse {
  @Element() el: HTMLElement;
  switchShowOrHide(e) {
    e.currentTarget.nextElementSibling.classList.contains('collapse-item-panel-show')
      ? e.currentTarget.nextElementSibling.classList.remove('collapse-item-panel-show')
      : e.currentTarget.nextElementSibling.classList.add('collapse-item-panel-show');

    e.currentTarget.lastElementChild.innerHTML = e.currentTarget.lastElementChild.innerHTML == 'K' ? 'M' : 'K';
  }
  render() {
    return (
      <Host>
        <div class="container">
          <div class="collapse-item">
            <div class="collapse-item-tab" onClick={this.switchShowOrHide}>
              <div class="collapse-title">
                <span>OPEN</span>
              </div>
              <i class="collapse-icon">K</i>
            </div>
            <div class="collapse-item-panel">
              <span>CONTENT</span>
            </div>
          </div>
          <div class="collapse-item">
            <div class="collapse-item-tab" onClick={this.switchShowOrHide}>
              <div class="collapse-title">
                <span>OPEN</span>
              </div>
              <i class="collapse-icon">K</i>
            </div>
            <div class="collapse-item-panel">
              <span>CONTENT</span>
            </div>
          </div>
          <div class="collapse-item">
            <div class="collapse-item-tab" onClick={this.switchShowOrHide}>
              <div class="collapse-title">
                <span>OPEN</span>
              </div>
              <i class="collapse-icon">K</i>
            </div>
            <div class="collapse-item-panel">
              <span>CONTENT</span>
            </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
