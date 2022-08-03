import { Component,Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'gls-field',
  styleUrl: 'gls-field.css',
  shadow: true,
})
export class GlsField {
  @Prop() labelText : string = '默认文本'
  @Prop() inputText : string = '请在此输入'
  @Prop() inputIcon: string = ''
  @Prop() required: boolean = false
  render() {
    let leftClass = this.required?'field-left field-left-req':'field-left'
    return (
      <Host>
        <div class="field">
            <div class={leftClass}>
            <label htmlFor="">{this.labelText }</label>
            </div>
            <div class="field-right">
                <div class="field-input">
                    <input class="field-input-text" type="text" name="" id="" placeholder={this.inputText} />
                    <div class="field-input-icon">
                        <gls-icon icon-size='15px' icon-color='#444' icon-style={this.inputIcon}> </gls-icon>
                    </div>
                </div>
            </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
