import { newSpecPage } from '@stencil/core/testing';
import { GlsButton } from '../gls-button';

describe('gls-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsButton],
      html: `<gls-button></gls-button>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-button>
    `);
  });
});
