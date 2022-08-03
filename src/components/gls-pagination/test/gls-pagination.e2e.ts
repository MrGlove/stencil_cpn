import { newE2EPage } from '@stencil/core/testing';

describe('gls-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-pagination></gls-pagination>');

    const element = await page.find('gls-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
