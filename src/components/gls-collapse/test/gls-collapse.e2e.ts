import { newE2EPage } from '@stencil/core/testing';

describe('gls-collapse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gls-collapse></gls-collapse>');

    const element = await page.find('gls-collapse');
    expect(element).toHaveClass('hydrated');
  });
});
