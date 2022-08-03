import { newE2EPage } from '@stencil/core/testing';

describe('gls-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-badge></gls-badge>');

    const element = await page.find('gls-badge');
    expect(element).toHaveClass('hydrated');
  });
});
