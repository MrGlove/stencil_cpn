import { Component,Element,Method, Host, h } from '@stencil/core';


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

  closeDialog() {
    this.el.shadowRoot.querySelector('.dialog-wrapper').classList.add('dialog-hide')
  }
  render() {
    return (
      <Host>
        <div class="dialog-wrapper dialog-hide" style={{ zIndex:'2000'}}>
          <div class="dialog">
            <div class="dialog-header">
              <span class="dialog-title">提示</span>
            </div>
            <div class="dialog-body">
              <span>这里写提示信息</span>
            </div>
            <div class="dialog-footer">
              <gls-button buttonType='primary'  buttonText='确定' onClick={this.closeDialog.bind(this)}></gls-button>
            </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
