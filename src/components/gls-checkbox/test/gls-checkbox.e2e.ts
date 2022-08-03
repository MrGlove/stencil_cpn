import { newE2EPage } from '@stencil/core/testing';

describe('gls-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-checkbox></gls-checkbox>');

    const element = await page.find('gls-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
