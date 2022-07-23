import { newE2EPage } from '@stencil/core/testing';

describe('gls-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-button></gls-button>');

    const element = await page.find('gls-button');
    expect(element).toHaveClass('hydrated');
  });
});
