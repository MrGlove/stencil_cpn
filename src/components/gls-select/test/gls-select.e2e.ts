import { newE2EPage } from '@stencil/core/testing';

describe('gls-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-select></gls-select>');

    const element = await page.find('gls-select');
    expect(element).toHaveClass('hydrated');
  });
});
