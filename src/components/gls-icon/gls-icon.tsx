
import { Component, Prop, Element ,Host, h } from '@stencil/core';

@Component({
  tag: 'gls-icon',
  styleUrl: 'gls-icon.css',
  shadow: true,
})
export class GlsIcon {
  @Prop() iconStyle: string = '&#xe61e;'
  @Prop() iconSize: string = '25px'
  @Prop() iconColor: string = '#fff'
  @Element() el:HTMLElement
  
  
  render() {
    
    let newIconCSS = document.createElement('style')
    newIconCSS.innerHTML = `
    :host{
      font-size:${this.iconSize};
      color:${this.iconColor}
    }`
    this.el.shadowRoot.appendChild(newIconCSS)
    
    return (
      <Host><span class={'gls-icon'}>{this.iconStyle}</span></Host>
    );
  }

}
