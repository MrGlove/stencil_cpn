import { Component, Event, EventEmitter, Element, Method, Host, h, Prop } from '@stencil/core';


@Component({
  tag: 'gls-dialog',
  styleUrl: 'gls-dialog.css',
  shadow: true,
})
export class GlsDialog {
  @Element() el: HTMLElement
  @Method() async showDialog() {
    this.el.shadowRoot.querySelector('.dialog-wrapper').classList.remove('dialog-hide');
  }
  @Event() newMissionSubmitted: EventEmitter<Object>
  @Prop() ddata: object = {
    a: 1,
    b: 2
  }

  newMissionSubmittedHandler() {
    this.newMissionSubmitted.emit(this.ddata)
  }

  closeDialog() {
    this.el.shadowRoot.querySelector('.dialog-wrapper').classList.add('dialog-hide')
  }
  render() {
    return (
      <Host>
        <div class="dialog-wrapper dialog-hide" style={{ zIndex: '2000' }}>
          <div class="dialog">
            <div class="dialog-header">
              <span class="dialog-title">提示</span>
            </div>
            <div class="dialog-body">
              <span>//这里放个表单</span>
            </div>
            <div class="dialog-footer">
              <gls-button buttonText='tijiao' onClick={this.newMissionSubmittedHandler.bind(this)}></gls-button>
              <slot><gls-button buttonType='primary' buttonText='确定' onClick={this.closeDialog.bind(this)}></gls-button></slot>
            </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
