import { newE2EPage } from '@stencil/core/testing';

describe('gls-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-title></gls-title>');

    const element = await page.find('gls-title');
    expect(element).toHaveClass('hydrated');
  });
});
