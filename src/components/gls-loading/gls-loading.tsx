import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'gls-loading',
  styleUrl: 'gls-loading.css',
  shadow: true,
})
export class GlsLoading {

  render() {
    return (
      <Host>
        <div class="container">
          <div class="mask">
            <div class="loading">
              <svg class="circular">
                <circle cx="21" cy="21" r="20" fill="none" class="path"></circle>
              </svg>
            </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
