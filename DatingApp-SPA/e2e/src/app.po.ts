import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

// script

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}



// this is