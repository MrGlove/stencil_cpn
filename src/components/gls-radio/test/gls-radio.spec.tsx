import { newSpecPage } from '@stencil/core/testing';
import { GlsRadio } from '../gls-radio';

describe('gls-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsRadio],
      html: `<gls-radio></gls-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-radio>
    `);
  });
});
