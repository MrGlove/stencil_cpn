import { newE2EPage } from '@stencil/core/testing';

describe('gls-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-dialog></gls-dialog>');

    const element = await page.find('gls-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
