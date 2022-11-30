import { Component, Element, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'gls-progress',
  styleUrl: 'gls-progress.css',
  shadow: true,
})
export class GlsProgress {
  @Prop() progressPercent: number = 50
  @Prop() progressColor:string = '#409eff'
  @Element() el:HTMLElement
  render() {
    let newCSS = document.createElement('style')
    newCSS.innerHTML = `
      .inner{
        width:${this.progressPercent}%;
        background-color:var(--color-first)
      }
    `
    this.el.shadowRoot.appendChild(newCSS)
    return (
        
      <Host>
        <div class="container">
          <div class="bar">
            <div class="outer">
              <div class="inner"></div>
            </div>
          </div>
          <div class="info">{this.progressPercent}%</div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
