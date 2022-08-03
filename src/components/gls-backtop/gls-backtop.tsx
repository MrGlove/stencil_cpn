import { Component,Element, Host, h } from '@stencil/core';

@Component({
  tag: 'gls-backtop',
  styleUrl: 'gls-backtop.css',
  shadow: true,
})
export class GlsBacktop {
  @Element() el: HTMLElement
  timer:any
  toTop() {
    var step = document.documentElement.scrollTop
    this.timer = window.setInterval(() => {
      step -= 30
      if (step < 0) {
        window.clearInterval(this.timer)
      }
      window.scrollTo(0,step)
    },10)
  }

  componentWillLoad() {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 300) {
        this.el.shadowRoot.querySelector('.gls-backtop').style='display:flex'
      } else {
        this.el.shadowRoot.querySelector('.gls-backtop').style = 'display:none';
      }
    }.bind(this);
  }

  render() {
    return (
      <Host>
        <div class="gls-backtop" style={{display:'none'}} onClick={this.toTop}>
          <div class="backtop-inner">
           上
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
