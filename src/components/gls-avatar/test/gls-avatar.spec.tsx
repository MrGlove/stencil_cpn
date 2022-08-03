import { newSpecPage } from '@stencil/core/testing';
import { GlsAvatar } from '../gls-avatar';

describe('gls-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsAvatar],
      html: `<gls-avatar></gls-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-avatar>
    `);
  });
});
