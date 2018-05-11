import { AppMaterialPage } from './app.po';

describe('app-material App', () => {
  let page: AppMaterialPage;

  beforeEach(() => {
    page = new AppMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
