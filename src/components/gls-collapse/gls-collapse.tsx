import { Component, Element, Host, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'gls-collapse',
  styleUrl: 'gls-collapse.css',
  shadow: true,
})
export class GlsCollapse {
  @Prop() clpsTitle: string = '默认名称';
  @State() clpsMainInfo: string = '主info';
  @Prop() stateList: string = ''
  @Prop() currentState: number;
  @Element() el: HTMLElement;
  @Prop() rl: Array<string>
  @Method()
  async changeMainInfo(index: number) {
    console.log('state changed');
    this.clpsMainInfo = this.rl[index]
  }
  @Method()
  async deleteLine() {
    console.log('deleted')
  }
  connectedCallback() {
    this.rl = this.stateList.split(' ')
    this.clpsMainInfo = this.rl[this.currentState]
  }
  switchShowOrHide(e) {
    e.currentTarget.nextElementSibling.classList.contains('collapse-item-panel-show')
      ? e.currentTarget.nextElementSibling.classList.remove('collapse-item-panel-show')
      : e.currentTarget.nextElementSibling.classList.add('collapse-item-panel-show');
  }
  render() {
    return (
      <Host>
        <div class="container">
          <div class="collapse-item">
            <div class="collapse-item-tab" onClick={this.switchShowOrHide}>
              <div class="collapse-title">
                <span>{this.clpsTitle}</span>
              </div>
              <i class="collapse-icon">{this.clpsMainInfo}</i>
            </div>
            <div class="collapse-item-panel">
              <slot></slot>
            </div>
          </div>
        </div>

      </Host>
    );
  }
}
