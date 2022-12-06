import { Component, Event, EventEmitter, Prop, h, State, Method } from '@stencil/core';
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
  @Prop() radioColor: string = 'blue'
  @Prop() radioName: string = 'defaultName'
  @Prop() itemText: string = 'content'
  @Prop() itemId: string = 'defaultID' + offerId()()
  @Prop() itemChecked: boolean = false
  @Event() selected: EventEmitter<Object>
  @Event() canceled: EventEmitter<Object>
  @State() idChecked: boolean = this.itemChecked
  @Method()
  async changeChecked(index: number) {
    console.log(index);
    this.idChecked = index == 1 ? true : false
  }

  render() {
    return (<div>
      <input type="radio" name={this.radioName} id={this.itemId} checked={this.itemChecked} hidden />
      <label htmlFor={this.itemId} class={`radio-${this.radioStyle} radio-color-${this.radioColor}`}>{this.itemText}</label>
    </div>
    );
  }

}
