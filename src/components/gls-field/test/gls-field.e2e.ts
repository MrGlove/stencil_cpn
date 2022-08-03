import { newE2EPage } from '@stencil/core/testing';

describe('gls-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-field></gls-field>');

    const element = await page.find('gls-field');
    expect(element).toHaveClass('hydrated');
  });
});
