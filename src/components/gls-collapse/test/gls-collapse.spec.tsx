import { newSpecPage } from '@stencil/core/testing';
import { GlsCollapse } from '../gls-collapse';

describe('gls-collapse', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsCollapse],
      html: `<gls-collapse></gls-collapse>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-collapse>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-collapse>
    `);
  });
});
