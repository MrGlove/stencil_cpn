import { newSpecPage } from '@stencil/core/testing';
import { GlsProgress } from '../gls-progress';

describe('gls-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsProgress],
      html: `<gls-progress></gls-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-progress>
    `);
  });
});
