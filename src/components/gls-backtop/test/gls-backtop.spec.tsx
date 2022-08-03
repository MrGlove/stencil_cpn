import { newSpecPage } from '@stencil/core/testing';
import { GlsBacktop } from '../gls-backtop';

describe('gls-backtop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsBacktop],
      html: `<gls-backtop></gls-backtop>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-backtop>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-backtop>
    `);
  });
});
