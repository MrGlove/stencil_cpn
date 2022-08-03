import { newSpecPage } from '@stencil/core/testing';
import { GlsDialog } from '../gls-dialog';

describe('gls-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsDialog],
      html: `<gls-dialog></gls-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-dialog>
    `);
  });
});
