import { browser, by, element } from 'protractor';

export class TestProductsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tp-root h1')).getText();
  }
}
