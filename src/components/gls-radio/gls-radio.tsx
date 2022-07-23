import { Component, Prop, h } from '@stencil/core';
function offerId() {
  let index = 0
  return function () {
    return index++
  }
}
@Component({
  tag: 'gls-radio',
  styleUrl: 'gls-radio.css',
  shadow: false,//用影子树的话没法把单选元素识别到同一组
})
export class GlsRadio {
  @Prop() radioStyle: string = 'round'
  @Prop() radioColor: string = 'primary'
  @Prop() radioName: string = 'defaultName'
  @Prop() itemText: string = 'content'
  @Prop() itemId: string = 'defaultID' + offerId()()
  @Prop() itemChecked: boolean = false

  render() {
    return (<div>
      <input type="radio" name={this.radioName} id={this.itemId} checked={this.itemChecked} hidden />
      <label htmlFor={this.itemId} class={`radio-${this.radioStyle} radio-color-${this.radioColor}`}>{this.itemText}</label>
    </div>
    );
  }

}
