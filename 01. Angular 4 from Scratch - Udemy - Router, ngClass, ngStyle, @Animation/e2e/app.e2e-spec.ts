import { TestV4Page } from './app.po';

describe('test-v4 App', () => {
  let page: TestV4Page;

  beforeEach(() => {
    page = new TestV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
