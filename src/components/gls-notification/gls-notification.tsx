import { Component, Event, EventEmitter, Method, Element, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'gls-notification',
  styleUrl: 'gls-notification.css',
  shadow: true,
})
export class GlsNotification {
  @Prop() notificationText: string = '默认通知内容'
  @Prop() notificationPosition: string = 'right-top'
  @Element() el: HTMLElement
  @Method() async showNotify() {
    this.el.shadowRoot.querySelector('.notify').classList.remove('notify-anim');
    this.el.shadowRoot.querySelector('.notify').getAnimations(); //???????????随便跑一个函数??????????????
    this.el.shadowRoot.querySelector('.notify').classList.add('notify-anim');
  }
  @Event() notiClosed: EventEmitter<object>
  render() {
    return (
      <Host>
        <div class="container">
          <div class="popup popup-top notify">这是通知内容</div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
