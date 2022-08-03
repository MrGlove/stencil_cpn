import { newSpecPage } from '@stencil/core/testing';
import { GlsLoading } from '../gls-loading';

describe('gls-loading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsLoading],
      html: `<gls-loading></gls-loading>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-loading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-loading>
    `);
  });
});
