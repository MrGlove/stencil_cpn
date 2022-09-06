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
  @Event() newDataSubmitted: EventEmitter<Object>
  @Prop() deliverdata: object = {
    a: 1,
    b: 2
  }

  newMissionSubmittedHandler() {
    this.newDataSubmitted.emit(this.deliverdata)
  }

  @Method() async closeDialog() {
    this.el.shadowRoot.querySelector('.dialog-wrapper').classList.add('dialog-hide')
  }
  render() {
    return (
      <Host>
        <div class="dialog-wrapper dialog-hide" style={{ zIndex: '2000' }}>
          <div class="dialog">
            <div class="dialog-header">
              <span class="dialog-title">明确详情</span>
            </div>
            <div class="dialog-body">
              <slot name='dialog-field '></slot>
            </div>
            <div class="dialog-footer">
              <slot name='dialog-submit '></slot>
              <gls-button buttonType='primary' buttonText='确定' onClick={this.closeDialog.bind(this)}></gls-button>
            </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
