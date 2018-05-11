import { AppEsqueletoPage } from './app.po';

describe('app-esqueleto App', () => {
  let page: AppEsqueletoPage;

  beforeEach(() => {
    page = new AppEsqueletoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
