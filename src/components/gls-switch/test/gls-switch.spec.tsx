import { newSpecPage } from '@stencil/core/testing';
import { GlsSwitch } from '../gls-switch';

describe('gls-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsSwitch],
      html: `<gls-switch></gls-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-switch>
    `);
  });
});
