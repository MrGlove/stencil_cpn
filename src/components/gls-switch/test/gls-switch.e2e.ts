import { newE2EPage } from '@stencil/core/testing';

describe('gls-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-switch></gls-switch>');

    const element = await page.find('gls-switch');
    expect(element).toHaveClass('hydrated');
  });
});
