import { newE2EPage } from '@stencil/core/testing';

describe('gls-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-icon></gls-icon>');

    const element = await page.find('gls-icon');
    expect(element).toHaveClass('hydrated');
  });
});
