import { newSpecPage } from '@stencil/core/testing';
import { GlsTag } from '../gls-tag';

describe('gls-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsTag],
      html: `<gls-tag></gls-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-tag>
    `);
  });
});
