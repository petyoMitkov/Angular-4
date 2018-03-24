import { AuthWithAngularfire2Page } from './app.po';

describe('auth-with-angularfire2 App', () => {
  let page: AuthWithAngularfire2Page;

  beforeEach(() => {
    page = new AuthWithAngularfire2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
