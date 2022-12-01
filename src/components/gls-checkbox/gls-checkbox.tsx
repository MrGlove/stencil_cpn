import { Component,Event,EventEmitter, Prop, h } from '@stencil/core';
function offerId() {
  let index = 0
  return function () {
    return index++
  }
}
@Component({
  tag: 'gls-checkbox',
  styleUrl: 'gls-checkbox.css',
  shadow: true,
})
export class GlsCheckbox {
  @Prop() checkboxStyle: string = 'round'
  @Prop() checkboxColor: string = 'blue'
  @Prop() checkboxName: string = 'defaultName'
  @Prop() itemText: string = 'content'
  @Prop() itemId: string = 'defaultID' + offerId()()
  @Prop() itemChecked: boolean = false
  @Event() selected:EventEmitter<Object>
  @Event() canceled:EventEmitter<Object>
  render() {
    return (
      <div>
      <input type="checkbox" name={this.checkboxName} id={this.itemId} checked={this.itemChecked} hidden />
      <label htmlFor={this.itemId} class={`checkbox-${this.checkboxStyle} checkbox-color-${this.checkboxColor}`}>{this.itemText}</label>
    </div>
    );
  }

}
