import { newSpecPage } from '@stencil/core/testing';
import { GlsSelect } from '../gls-select';

describe('gls-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsSelect],
      html: `<gls-select></gls-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-select>
    `);
  });
});
