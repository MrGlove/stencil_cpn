import { newSpecPage } from '@stencil/core/testing';
import { GlsDivider } from '../gls-divider';

describe('gls-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsDivider],
      html: `<gls-divider></gls-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-divider>
    `);
  });
});
