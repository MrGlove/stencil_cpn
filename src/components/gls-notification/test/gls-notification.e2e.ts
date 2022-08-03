import { newE2EPage } from '@stencil/core/testing';

describe('gls-notification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-notification></gls-notification>');

    const element = await page.find('gls-notification');
    expect(element).toHaveClass('hydrated');
  });
});
