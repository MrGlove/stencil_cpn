import { Component, Prop, h } from '@stencil/core';
const buttonTypeMap = {
  default: { textColor: '#222', bgColor: '#f91', borderColor: '#222' },
  primary: { textColor: '#FFF', bgColor: '#5FCE79', borderColor: '#5FCE79' },
  text: { textColor: '#222', bgColor: '#FFF', borderColor: '#222' },
}
@Component({
  tag: 'gls-button',
  styleUrl: 'gls-button.css',
  shadow: true,
})


export class GlsButton {

  @Prop() buttonText: string = "默认文字";
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
      height: '28px'
    }}>{this.buttonText}</button></div >);
  }

}
