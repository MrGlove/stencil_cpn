import { newE2EPage } from '@stencil/core/testing';

describe('gls-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-menu></gls-menu>');

    const element = await page.find('gls-menu');
    expect(element).toHaveClass('hydrated');
  });
});
