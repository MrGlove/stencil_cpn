import { newSpecPage } from '@stencil/core/testing';
import { TestCpnfirst } from '../test-cpnfirst';

describe('test-cpnfirst', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestCpnfirst],
      html: `<test-cpnfirst></test-cpnfirst>`,
    });
    expect(page.root).toEqualHtml(`
      <test-cpnfirst>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-cpnfirst>
    `);
  });
});
