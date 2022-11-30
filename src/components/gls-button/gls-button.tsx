import { Component, Prop, h } from '@stencil/core';
const buttonTypeMap = {
  default: { textColor: 'var(--color-first)', bgColor: '#a30030', borderColor: '#dad' },
  success: { textColor: '#FFF', bgColor: '#5FCE79', borderColor: '#5FCE79' },
  text: { textColor: '#222', bgColor: '#FFF', borderColor: '#222' },
  danger: { textColor: '#fff', bgColor: '#ee0a24', borderColor: '#ee0a24' },
  primary: { textColor: '#fff', bgColor: '#1989fa', borderColor: '#1989fa' }

}
@Component({
  tag: 'gls-button',
  styleUrl: 'gls-button.css',
  shadow: true,
})


export class GlsButton {

  @Prop() buttonText: string = '默认文字';
  @Prop() buttonType: string = 'default';
  @Prop() buttonRadius: string = '3px';

  render() {
    const buttonTypeCSS = this.buttonType &&
      buttonTypeMap[this.buttonType] ?
      buttonTypeMap[this.buttonType] :
      buttonTypeMap['default']

    return (<div><button style={{
      borderRadius: this.buttonRadius,
      border: '1px solid' + buttonTypeCSS.borderColor,
      color: buttonTypeCSS.textColor,
      backgroundColor: buttonTypeCSS.bgColor,
      fontSize: '14px',
      textAlign: 'center',
      padding: '4px 10px',
      display: 'inline-block',
      height: '32px'
    }}>{this.buttonText}</button></div>);
  }

}
