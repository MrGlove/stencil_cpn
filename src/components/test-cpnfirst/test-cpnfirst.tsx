import { Component,Element, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'test-cpnfirst',
  styleUrl: 'test-cpnfirst.scss',
  shadow: true,
})
export class TestCpnfirst {

  @Prop() ttext: string;
  @Prop() tcolor: string;
  @Element() el: HTMLElement;
  
  render() {
  
    let newstyle = document.createElement('style')
    newstyle.innerHTML = `
    :host{
      --fs:30px;
    }
    #tid{
      color:var(--color-primary)
    }
    `
    this.el.shadowRoot.appendChild(newstyle)
    // document.getElementsByTagName('test-cpnfirst')[0].shadowRoot.firstChild.textContent = document.getElementsByTagName('test-cpnfirst')[0].shadowRoot.firstChild.textContent.replace('#f91','#000');
    return (<Host>
      <div id='tid'>{this.ttext}</div>
      </Host>);
  }
}
