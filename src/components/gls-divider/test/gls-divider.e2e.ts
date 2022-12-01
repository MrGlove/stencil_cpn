import { newE2EPage } from '@stencil/core/testing';

describe('gls-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-divider></gls-divider>');

    const element = await page.find('gls-divider');
    expect(element).toHaveClass('hydrated');
  });
});
