import { AppFormsPage } from './app.po';

describe('app-forms App', () => {
  let page: AppFormsPage;

  beforeEach(() => {
    page = new AppFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
