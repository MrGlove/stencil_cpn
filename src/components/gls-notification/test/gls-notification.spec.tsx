import { newSpecPage } from '@stencil/core/testing';
import { GlsNotification } from '../gls-notification';

describe('gls-notification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlsNotification],
      html: `<gls-notification></gls-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <gls-notification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gls-notification>
    `);
  });
});
