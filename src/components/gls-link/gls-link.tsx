import { Component, Prop, h } from '@stencil/core';
const linkTypeMap = {
  default: 'default',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
}
@Component({
  tag: 'gls-link',
  styleUrl: 'gls-link.scss',
  shadow: true,
})
export class GlsLink {

  @Prop() linkText: string = '默认链接';
  @Prop() linkType: string = 'default';
  @Prop() linkUnderline: boolean = true;

  render() {
    const linkTypeCSS = this.linkType &&
      linkTypeMap[this.linkType] ?
      linkTypeMap[this.linkType] :
      linkTypeMap['dafault']
    const linkUnderlineType = this.linkUnderline ? 'u' : 'n'
    return (
      <a href="#" class={`gls-link gls-link-${linkTypeCSS} gls-link-${linkUnderlineType}`} >{this.linkText}</a>
    );
  }

}
