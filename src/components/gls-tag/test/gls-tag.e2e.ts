import { newE2EPage } from '@stencil/core/testing';

describe('gls-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-tag></gls-tag>');

    const element = await page.find('gls-tag');
    expect(element).toHaveClass('hydrated');
  });
});
