import { newE2EPage } from '@stencil/core/testing';

describe('gls-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-radio></gls-radio>');

    const element = await page.find('gls-radio');
    expect(element).toHaveClass('hydrated');
  });
});
