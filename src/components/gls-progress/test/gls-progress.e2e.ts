import { newE2EPage } from '@stencil/core/testing';

describe('gls-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-progress></gls-progress>');

    const element = await page.find('gls-progress');
    expect(element).toHaveClass('hydrated');
  });
});
