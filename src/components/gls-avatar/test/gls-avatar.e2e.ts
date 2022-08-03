import { newE2EPage } from '@stencil/core/testing';

describe('gls-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-avatar></gls-avatar>');

    const element = await page.find('gls-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
