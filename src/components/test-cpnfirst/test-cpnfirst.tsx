import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'test-cpnfirst',
  styleUrl: 'test-cpnfirst.css',
  shadow: true,
})
export class TestCpnfirst {

  @Prop() ttext: string;

  render() {
    return <div>{this.ttext}</div>;
  }

}
