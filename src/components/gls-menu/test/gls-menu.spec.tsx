import { newSpecPage } from '@stencil/core/testing';
import { GlsMenu } from '../gls-menu';

describe('gls-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsMenu],
      html: `<gls-menu></gls-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-menu>
    `);
  });
});
