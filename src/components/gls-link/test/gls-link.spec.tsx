import { newSpecPage } from '@stencil/core/testing';
import { GlsLink } from '../gls-link';

describe('gls-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsLink],
      html: `<gls-link></gls-link>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-link>
    `);
  });
});
