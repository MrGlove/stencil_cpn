import { Component,Method,State, Element, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'gls-progress',
  styleUrl: 'gls-progress.css',
  shadow: true,
})
export class GlsProgress {
  @Prop() progressPercent: number = 50
  @Prop() progressColor: string = '#409eff'
  @State() nowpercent: number = this.progressPercent
  @Element() el: HTMLElement
  @Method()
  async changeData(index: number) {
    console.log('data updated');
    this.nowpercent = index
  }
  render() {
    let newCSS = document.createElement('style')
    newCSS.innerHTML = `
      .inner{
        width:${this.nowpercent}%;
        background-color:var(--color-primary)
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
