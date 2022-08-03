import { newE2EPage } from '@stencil/core/testing';

describe('gls-loading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-loading></gls-loading>');

    const element = await page.find('gls-loading');
    expect(element).toHaveClass('hydrated');
  });
});
