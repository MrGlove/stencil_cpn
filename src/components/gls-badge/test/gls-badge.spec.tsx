import { newSpecPage } from '@stencil/core/testing';
import { GlsBadge } from '../gls-badge';

describe('gls-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsBadge],
      html: `<gls-badge></gls-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-badge>
    `);
  });
});
