import { newSpecPage } from '@stencil/core/testing';
import { GlsPagination } from '../gls-pagination';

describe('gls-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsPagination],
      html: `<gls-pagination></gls-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-pagination>
    `);
  });
});
