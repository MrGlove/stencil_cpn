import { Component, Prop,  h } from '@stencil/core';

@Component({
  tag: 'gls-title',
  styleUrl: 'gls-title.css',
  shadow: true,
})
export class GlsTitle {
  @Prop() titleLevel: string = '1'
  @Prop() titleText:string = 'TITLE'
  render() {
    return (
      <div class={`gls-title-${this.titleLevel}`}>{this.titleText }</div>
    );
  }

}
