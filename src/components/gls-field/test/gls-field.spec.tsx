import { newSpecPage } from '@stencil/core/testing';
import { GlsField } from '../gls-field';

describe('gls-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsField],
      html: `<gls-field></gls-field>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-field>
    `);
  });
});
