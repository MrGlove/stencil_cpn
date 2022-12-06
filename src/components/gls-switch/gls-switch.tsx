import { Component, Event, EventEmitter, Prop, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'gls-switch',
  styleUrl: 'gls-switch.scss',
  shadow: true,
})
export class GlsSwitch {
  @Prop() switchSize: string = '22px'
  @Prop() switchColor: string = 'red'
  @Prop() switchDisabled: boolean = false
  @Prop() switchChecked: boolean = false
  @Prop() switchText: string = '默认文字'
  @Element() el: HTMLElement
  @Event() switchTotrue: EventEmitter<Object>
  @Event() switchTofalse: EventEmitter<Object>
  switchTotrueHandler(ev: Object) {

    this.switchTotrue.emit(ev)
  }
  render() {
    let newSwitchCSS = document.createElement('style')
    newSwitchCSS.innerHTML = `
    :host{
      --switch-size:${this.switchSize}
    }
    .switch:checked~label:before{   
        background-color:${this.switchColor};   
    } 
    `
    if (this.switchDisabled) {
      newSwitchCSS.innerHTML += `
      label:before{
        background-color: #ddd;
      }
      label:after{
        background-color: #bbb;
      }
      `
    }
    this.el.shadowRoot.appendChild(newSwitchCSS)
    return (
      <Host>
        <div class="gls-switch" onClick={this.switchTotrueHandler.bind(this)}>
          <input id="switchid" type="checkbox" class="switch" disabled={this.switchDisabled} checked={this.switchChecked} />
          <label htmlFor="switchid">{this.switchText}
          </label>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
