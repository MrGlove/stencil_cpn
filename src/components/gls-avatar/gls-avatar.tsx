import { Component,Element, Prop, Host, h } from '@stencil/core';
const shapeMap = {
  'round': '50%',
  'square': '10%'
}
const typeMap = {
  'icon': "<gls-icon icon-size='25px' icon-color='#fff' icon-style='&#xe61e;'></gls-icon>",
  'img': '<img src="../../assets/avatarimg/rbluepng.png" alt="" />',
  'letter': '<b>U<b>'
}
@Component({
  tag: 'gls-avatar',
  styleUrl: 'gls-avatar.scss',
  shadow: true,
})
export class GlsAvatar {
  @Prop() avatarSize:string='50px'
  @Prop() avatarShape:string='round'
  @Prop() avatarType:string='img'
  @Element()el:HTMLElement
  render() {
    let newCSS = document.createElement('style')
    newCSS.innerHTML = `
    :host{
      --avatar-size:${this.avatarSize};
      --avatar-shape:${shapeMap[this.avatarShape]}
    }
    `
    this.el.shadowRoot.appendChild(newCSS)
    return (
      <Host>
        <div>
          <span class="avatar">
            <div innerHTML={typeMap[this.avatarType]}></div>
            
          </span>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
