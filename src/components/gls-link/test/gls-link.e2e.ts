import { newE2EPage } from '@stencil/core/testing';

describe('gls-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-link></gls-link>');

    const element = await page.find('gls-link');
    expect(element).toHaveClass('hydrated');
  });
});
