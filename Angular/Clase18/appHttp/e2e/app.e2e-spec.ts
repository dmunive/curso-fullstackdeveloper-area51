import { AppRutasPage } from './app.po';

describe('app-rutas App', () => {
  let page: AppRutasPage;

  beforeEach(() => {
    page = new AppRutasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
