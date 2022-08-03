import { newE2EPage } from '@stencil/core/testing';

describe('gls-backtop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-backtop></gls-backtop>');

    const element = await page.find('gls-backtop');
    expect(element).toHaveClass('hydrated');
  });
});
