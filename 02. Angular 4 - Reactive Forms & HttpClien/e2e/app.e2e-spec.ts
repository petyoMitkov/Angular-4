import { HttpReactiveFormsPage } from './app.po';

describe('http-reactive-forms App', () => {
  let page: HttpReactiveFormsPage;

  beforeEach(() => {
    page = new HttpReactiveFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
