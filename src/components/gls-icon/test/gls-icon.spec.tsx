import { newSpecPage } from '@stencil/core/testing';
import { GlsIcon } from '../gls-icon';

describe('gls-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsIcon],
      html: `<gls-icon></gls-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-icon>
    `);
  });
});
