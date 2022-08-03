import { newSpecPage } from '@stencil/core/testing';
import { GlsCheckbox } from '../gls-checkbox';

describe('gls-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsCheckbox],
      html: `<gls-checkbox></gls-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-checkbox>
    `);
  });
});
