import { TestProductsPage } from './app.po';

describe('test-products App', () => {
  let page: TestProductsPage;

  beforeEach(() => {
    page = new TestProductsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to tp!');
  });
});
