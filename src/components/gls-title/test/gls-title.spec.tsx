import { newSpecPage } from '@stencil/core/testing';
import { GlsTitle } from '../gls-title';

describe('gls-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsTitle],
      html: `<gls-title></gls-title>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-title>
    `);
  });
});
