import { Component,Prop, h } from '@stencil/core';

@Component({
  tag: 'gls-divider',
  styleUrl: 'gls-divider.css',
  shadow: true,
})
export class GlsDivider {
  @Prop() dividerSize:string = '1px'
  @Prop() dividerColor:string = '#aaa'
  @Prop() dividerLength:string = '100%'
  render() {
    return (
      <div style={{
        margin: '20px 0',
        height: this.dividerSize,
        backgroundColor: this.dividerColor,
        width: this.dividerLength
      }}></div>
    );
  }

}
