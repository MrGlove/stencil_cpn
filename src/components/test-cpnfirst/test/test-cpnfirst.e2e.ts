import { newE2EPage } from '@stencil/core/testing';

describe('test-cpnfirst', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-cpnfirst></test-cpnfirst>');

    const element = await page.find('test-cpnfirst');
    expect(element).toHaveClass('hydrated');
  });
});
